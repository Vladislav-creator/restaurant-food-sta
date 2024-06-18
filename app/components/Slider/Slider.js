"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

const dishes = [
  { id: 1, name: "Соєві катлетки із зеленню, домашнім майонезом та лавашем", ingredients: "Соеві катлетки, листя салату, петрушка, домашній майонез, лаваш", url: "./img/hero/desktop-hero512.png" },
  { id: 2, name: "Грецький салат", ingredients: "Оливкова олія, лимонний сік, часник, сушений орегано, морська сіль, свіжий чорний перець, помідори, червона цибуля, огірки, зелений стручковий перець, сир фета, маслини без кісточок, руккола, листя салату, кукурудза", url: "./img/hero/desktop-hero-2.png" },
  { id: 3, name: "Тропічний салат зі смаженим яйцем", ingredients: "Манго, молоді паростки Брокколі, червоний перець, спаржа, томатный соус, смажене яйце, хліб український чорний", url: "./img/hero/desktop-hero-3.png" },
];

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
    <div>
      <div className={styles.dishDetails}>
        <p className={styles.dishName}>{dishes[currentIndex].name}</p>
      
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
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          className={styles.image}
                          width={450}
                          height={450}
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
    </div>
  );
};

export default TheSlider;