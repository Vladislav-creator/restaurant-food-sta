"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import { getCooks } from '../services';
export default function About() {

  const [headChef, setHeadChef] = useState({});
  const [otherCooks, setOtherCooks] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getCooks();
          const headChef = data.find(cook => cook.position === "Головний кухар");
          const otherCooks = data.filter(cook => cook.position !== "Головний кухар");
          setHeadChef(headChef);
          setOtherCooks(otherCooks);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching dishes:', error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);
   
    if (loading) {
      return <div>Зачекайте трохи, йде завантаження...<span className={styles.emodji}>👨‍🍳🥣🍔🥘🍲🥗</span></div>;
    }
    return (
        <>
            <h1>Наша команда</h1>

            <div className={styles.cooksContainer}>
                {headChef && (
                    <div key={headChef.id} className={styles.cooksItem}>
                        <div className={styles.circleImage}>
                            <Image
                                src={headChef.url}
                                alt={headChef.name}
                                width={250}
                                height={250}
                                className={styles.imageCook}
                                priority
                            />
                        </div>
                        <p className={styles.position}>{headChef.position}</p>
                        <p className={styles.name}>{headChef.name}</p>
                    </div>
                )}
            </div>

            <div className={styles.cooksContainer}>
                {otherCooks.map((cook) => (
                    <div key={cook.id} className={styles.cooksItem}>
                        <div className={styles.circleImage}>
                            <Image
                                src={cook.url}
                                alt={cook.name}
                                width={250}
                                height={250}
                                className={styles.imageCook}
                                priority
                            />
                        </div>
                        <p className={styles.position}>{cook.position}</p>
                        <p className={styles.name}>{cook.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}