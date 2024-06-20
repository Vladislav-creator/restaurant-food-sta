"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';
import {dishes} from '../ArrayDishes';

const TheSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dishes.length) % dishes.length);
  };

  return (
    <div className={styles.wrapperMainHero}>
      <div className={styles.wrapperTitleDescriptionButtonOrder}>
        <h3>Насолоджуйся улюбленою їжею !!!<br/>
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
        <h3 className={styles.dishName}>Блюдо: "{dishes[currentIndex].name}"</h3>
        <div className={styles.divIngredients}><p className={styles.ingredients}>Склад: {dishes[currentIndex].ingredients}</p></div>
        <p className={styles.weight}>Вага: {dishes[currentIndex].weight} г</p>
        <p className={styles.price}>{dishes[currentIndex].price} грн.</p>
        <button className={styles.buttonOrderNow}>Замовити</button>
      </div>
    </div>
  );
};

export default TheSlider;