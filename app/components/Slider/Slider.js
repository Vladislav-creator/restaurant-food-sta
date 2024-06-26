"use client";
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';
import  {getAllDishes}  from '../../services';  

const TheSlider = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDishes();
        setDishes(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dishes:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
  };

  if (loading) {
    return <div>Почекайте трошки, йде завантаження Бекенд знаходиться на RENDER, тому перше завантаження йде до 4-5хвилин, як що довго не входили у додаток...<span className={styles.emodji}>👨‍🍳🥣🍔🥘🍲🥗🍳</span></div>;
  }

  return (
    <div className={styles.wrapperMainHero}>
      <div className={styles.wrapperTitleDescriptionButtonOrder}>
        <h3>Насолоджуйся улюбленою їжею !!!<br /><span className={styles.emodji}>👨‍🍳🥣🍔🥘🍲🥗</span>
        </h3>
        <p>У нашому ресторані ви зможете скуштувати найсмачніші, вишукані страви Європейської кухні.</p>
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
                {dishes.map((dish, index) => (
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
        <h4 className={styles.dishName}>"{dishes[currentIndex].name}"</h4>
        <div className={styles.divIngredients}><p className={styles.ingredients}>Склад: {dishes[currentIndex].ingredients}</p></div>
        <p className={styles.weight}>Вага: {dishes[currentIndex].weight} г</p>
        <p className={styles.price}>{dishes[currentIndex].price} грн.</p>
        <button className={styles.buttonOrderNow}>Замовити</button>
      </div>
    </div>
  );
};

export default TheSlider;