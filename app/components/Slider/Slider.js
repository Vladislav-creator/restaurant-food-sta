"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import MySelectComponent from '../MySelectComponent/MySelectComponent';
import DishDetails from '../DishDetails/DishDetails';
import styles from './Slider.module.css';
import { getAllDishes } from '../../services';

const TheSlider = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDishes();
        const sortedDishes = data.sort((a, b) => a.level - b.level);
        setDishes(sortedDishes);
        setFilteredDishes(sortedDishes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dishes:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedType !== null && selectedType.value !== null) {
      const filtered = dishes.filter(dish => dish.type === selectedType.value);
      setFilteredDishes(filtered);
      setSelectedDish(null);
      setCurrentIndex(0);
    } else {
      setFilteredDishes(dishes);
      setSelectedDish(null);
      setCurrentIndex(0);
    }
  }, [selectedType, dishes]);

  useEffect(() => {
    if (selectedDish !== null) {
      const newIndex = filteredDishes.findIndex(dish => dish._id === selectedDish._id);
      if (newIndex !== -1) {
        setCurrentIndex(newIndex);
      }
    }
  }, [selectedDish, filteredDishes]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredDishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredDishes.length) % filteredDishes.length);
  };

  const handleDishChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedDish(selectedOption.value);
    } else {
      setSelectedDish(null);
    }
  };

  if (loading) {
    return <div>Зачекайте трохи, йде завантаження...<span className={styles.emodji}>👨‍🍳🥣🍔🥘🍲🥗</span></div>;
  }

  return (
    <div className={styles.wrapperMainHero}>
      <div className={styles.wrapperTitleDescriptionSelects}>
        <h3>Насолоджуйся улюбленою їжею !!!<br /><span className={styles.emodji}>👨‍🍳🥣🍔🥘🍲🥗</span></h3>
        <MySelectComponent
          options={[
            { value: null, label: 'Перехід до розділів блюд...' },
            { value: 'Перші блюда', label: 'Перші блюда' },
            { value: 'Другі блюда', label: 'Другі блюда' },
            { value: 'Салати-мікс', label: 'Салати-мікс' },
            { value: 'Салати', label: 'Салати' },
            { value: 'Гамбургери', label: 'Гамбургери' },
            { value: 'Піци', label: 'Піци' },
            { value: 'Шашлики', label: 'Шашлики' },
            { value: 'Морозиво', label: 'Морозиво' },
            { value: 'Соки', label: 'Соки' },
            { value: 'Чаї', label: 'Чаї' },
            { value: 'Кава', label: 'Кава' },
          ]}
          onChange={setSelectedType}
          value={selectedType}
          placeholder="Перехід до розділів блюд..."
          isClearable
        />
        <MySelectComponent
          options={filteredDishes.map(dish => ({ value: dish, label: dish.name }))}
          onChange={handleDishChange}
          value={selectedDish ? { value: selectedDish, label: selectedDish.name } : null}
          placeholder="Вибір назв блюд"
          isClearable
        />
      </div>
      <div className={styles.sliderContainer}>
        <button onClick={prevSlide} className={styles.prevButton}>
          <svg className={styles.sliderArrow} width="30" height="30">
            <use className={styles.sliderIcon} href="./img/hero/icons.svg#icon-v-left"></use>
          </svg>
        </button>
        <button onClick={nextSlide} className={styles.nextButton}>
          <svg className={styles.sliderArrow} width="30" height="30">
            <use className={styles.sliderIcon} href="./img/hero/icons.svg#icon-v-right"></use>
          </svg>
        </button>
        <div className={styles.imageFrame}>
          <div className={styles.slider}>
            <div className={styles.sliderWindow}>
              <div ref={sliderRef} className={styles.sliderLine} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {filteredDishes.map((dish, index) => (
                  <div key={index} className={styles.sliderItem}>
                    <div className={styles.imageContainer}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={dish.url}
                          alt={dish.name}
                          fill 
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          className={styles.image}
                          priority={true}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {filteredDishes[currentIndex] && (
        <DishDetails dish={filteredDishes[currentIndex]} />
      )}
    </div>
  );
};

export default TheSlider;


