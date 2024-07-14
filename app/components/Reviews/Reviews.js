
"use client";
import React, { useState } from 'react';
import styles from './Reviews.module.css';
import Image from 'next/image';

const TheReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      stars: '★★★★★',
      photo: './img/customer-photos/aladin_alimhun.jpg',
      name: 'Аладін Алімхан',
      email: 'aladin_alimhun@gmail.com',
      text: 'Люблю іноді заїжджати у ваше кафе, завжди почуваюся комфортно, насолоджуюся доброзичливою атмосферою та вишуканими стравами.'
    },
    {
      stars: '★★★★★',
      photo: './img/customer-photos/yuliya_dzura.jpg',
      name: 'Юлія Джура',
      email: 'yuliyadzura@gmail.com',
      text: 'Замовляємо іноді у цьому кафе собі свята: дні народження, завжди позитив залишається в душі та радість, різноманітність та якість приготовлених страв захоплює!!!'
    },
    {
      stars: '★★★★★',
      photo: './img/customer-photos/roman_kutz.jpg',
      name: 'Роман Куць',
      email: 'romankutz@gmail.com',
      text: 'Якщо я хочу собі підняти настрій, я знаю куди йти, це моє улюблене кафе Food Sta), тут я завжди знаходжу затишок та щось смачне . Рекомендую)'
    },
    {
      stars: '★★★★★',
      photo: './img/customer-photos/mariya_mirabella.jpg',
      name: 'Марія Мерабелла',
      email: 'mariyamirabella@gmail.com',
      text: "Це моє улюблене кафе, заходжу іноді в нього сама, а іноді зі своїми друзями з'їсти щось унікально-смачне та й просто відпочити"
    }
  ];

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.scrollButton} onClick={scrollLeft}>❮</button>
      <div className={styles.review}>
        <div className={styles.oneReview}>
          <p className={styles.stars}>{reviews[currentIndex].stars}</p>
          <p className={styles.text}>{reviews[currentIndex].text}</p>
          <div className={styles.reviewContent}>
            <div className={styles.circleImageMain}>
              <Image
                src={reviews[currentIndex].photo}
                alt="User"
                width={80}
                height={80}
                className={styles.imageUser}
                priority
              />
            </div>
            <div>
              <p className={styles.text}>{reviews[currentIndex].name}</p>
              <p className={styles.text}>{reviews[currentIndex].email}</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>❯</button>
    </div>
  );
};

export default TheReviews;