

import React from 'react';
import Image from 'next/image';
import styles from './ContactsPage.module.css';
import MapWithMarker from '../components/MapWithMarker';




const metadata = {
  title: 'Контакти кафе-ресторана "Food Sta"',
  description: 'Контакти кафе-ресторана "Food Sta": адреса, фото, місце росташування на карті',
};

export default function Contacts() {

  

  return (
    <div className={styles.container}>
      <h1>Наші контакти</h1>
      <div className={styles.wrapperAddressAndFotoRestorauntFoodSta}>
        <div className={styles.addressRestorauntFoodSta}>
          <p >Адреса ресторану:</p>
         <p className={styles.cityKiev}>м.Київ</p>
         <div  className={styles.iconMapAndStreet}>
         <Image
            src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
            alt="icon-map"
            width={26}
            height={26}
            className={styles.icon}
            priority
          /><p className={styles.text} >вул. Радистів, 34Ж</p></div>
          <div  className={styles.iconEmailAndEmail}>
         <Image
            src="https://cdn-icons-png.flaticon.com/128/9809/9809925.png"
            alt="icon-email"
            width={26}
            height={26}
            className={styles.icon}
            priority
          /> <p className={styles.text}>valdisbeketov@gmail.com</p></div>
        
        <div  className={styles.iconEmailAndEmail}>
         <Image
            src=" https://cdn-icons-png.flaticon.com/128/9639/9639598.png"
            alt="icon-email"
            width={26}
            height={26}
            className={styles.icon}
            priority
          /> <p className={styles.text}>+380936433965</p>
          </div>
          <p className={styles.textSecondPhone}>+380978556455</p>
          <div  className={styles.iconEmailAndEmail}>
         <Image
            src="https://cdn-icons-png.flaticon.com/128/14090/14090215.png"
            alt="icon-clock"
            width={26}
            height={26}
            className={styles.icon}
            priority
          /> <p className={styles.text}>Пн - Cб: 8:00 - 23:30</p>
          </div>
          <p className={styles.textSecondPhone}>Нд: 9:00 - 23:30</p>
          </div>
         
        <div className={styles.fotoRestorauntFoodSta}>
          <Image
            src="./img/food-sta-new.jpg"
            alt="restoraunt-food-sta"
            width={750}
            height={450}
            className={styles.imageCook}
            priority
          />
        </div>
      </div>
      <div className={styles.map}>
        <MapWithMarker/>
      </div>
      
    </div>
  );
}

export { metadata };