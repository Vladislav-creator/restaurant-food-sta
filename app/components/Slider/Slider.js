"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import MySelectComponent from '../MySelectComponent/MySelectComponent';
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
      setSelectedDish(null); // Сбрасываем выбранное блюдо при изменении типа
      setCurrentIndex(0); // Сбрасываем текущий индекс при изменении типа
    } else {
      setFilteredDishes(dishes);
      setSelectedDish(null); // Сбрасываем выбранное блюдо при null типе
      setCurrentIndex(0); // Сбрасываем текущий индекс при null типе
    }
  }, [selectedType, dishes]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredDishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredDishes.length) % filteredDishes.length);
  };

  useEffect(() => {
    // При изменении выбранного блюда обновляем индекс слайдера
    if (selectedDish !== null) {
      const newIndex = filteredDishes.findIndex(dish => dish.name === selectedDish.value);
      if (newIndex !== -1) {
        setCurrentIndex(newIndex);
      }
    }
  }, [selectedDish, filteredDishes]);

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
            { value: 'first', label: 'Перші блюда' },
            { value: 'second', label: 'Другі блюда' },
            { value: 'salad-mix', label: 'Салати-мікс' },
            { value: 'salad', label: 'Салати' },
            { value: 'hamburger', label: 'Гамбургери' },
            { value: 'pizza', label: 'Піци' },
            { value: 'kebabs', label: 'Шашлики' },
            { value: 'ice-cream', label: 'Морозиво' },
            { value: 'juices', label: 'Соки' },
            { value: 'tea', label: 'Чаї' },
            { value: 'coffee', label: 'Кава' },
          ]}
          onChange={setSelectedType}
          value={selectedType}
          placeholder="Перехід до розділів блюд..."
          isClearable
        />
        <MySelectComponent
          options={filteredDishes.map(dish => ({ value: dish.name, label: dish.name }))}
          onChange={setSelectedDish}
          value={selectedDish}
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
                          layout="fill"
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
      <div className={styles.dishDetails}>
        <h4 className={styles.dishName}>"{filteredDishes[currentIndex].name}"</h4>
        <div className={styles.divIngredients}><p className={styles.ingredients}>Склад: {filteredDishes[currentIndex].ingredients}</p></div>
        <p className={styles.weight}>Вага: {filteredDishes[currentIndex].weight} г</p>
        <p className={styles.price}>{filteredDishes[currentIndex].price} грн.</p>
        <button className={styles.buttonOrderNow}>Замовити</button>
      </div>
    </div>
  );
};

export default TheSlider;