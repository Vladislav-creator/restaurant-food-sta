"use client";
import React from 'react';
import Image from 'next/image';
import styles from './AboutComponent.module.css';

const AboutComponent = ({ headChef, otherCooks }) => {
  return (
    <>
      <h1>Наша команда</h1>
      <div className={styles.deskriptionTeamCooks}>
        <p className={styles.deskriptionTeamCooksparagraph}>Команда кухарів ресторану Food Sta – це команда професіоналів, яка має великий досвід у кулінарній сфері. Усі вони багаторазові призери та учасники різних кулінарних конкурсів та фестивалів.</p>
        <p>Що поєднує наших кухарів, крім місця роботи? Звичайно це любов і пристрасть до своєї справи, а ще багата фантазія, любов до творчості та винахідливість, адже готувати строго за рецептом, звичайно, здорово, проте наша команда майстерних </p>
        <p className={styles.deskriptionTeamCooksparagraph}>Справжнє бажання та здатність удосконалюватися притаманні кожному кухареві ресторану Food Sta.</p>
        <p className={styles.deskriptionTeamCooksparagraph}>У нас смачно, душевно-привабливо і будь-яка страва завжди виняткової якості та бездоганної свіжості.</p>
        <p className={styles.deskriptionTeamCooksparagraph}>Хто спробує - то обов'язково полюбить!</p>
      </div>
      <div className={styles.cooksContainer}>
        {headChef && (
          <div key={headChef._id} className={styles.cooksItem}>
            <div className={styles.circleImageMain}>
              <Image
                src={headChef.url}
                alt={headChef.name}
                width={300}
                height={300}
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
          <div key={cook._id} className={styles.cooksItem}>
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
};

export default AboutComponent;