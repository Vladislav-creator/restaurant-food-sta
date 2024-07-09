import Image from 'next/image';
import styles from './SectionHero.module.css'
const TheSectionHero = () => {
    
    return (
        
      <section >
        <h2>Чому нас рекомендують відвідати?</h2>
        <div className={styles.wrapperSectionHero}>
        <div className={styles.wrapperImageMainAndDescription}>
        <div className={styles.circleImageMain}>
        <Image
            src="./img/hero/food-kitchen.jpg"
            alt="food-kitchen"
            width={400}
            height={400}
            className={styles.fotoHero}
            priority
          />
          </div>
          <p className={styles.descriptionFotoWorkofFoodSta}>Професійна команда поварів, якісний, вишуканий смак</p>
          </div>
          <div className={styles.wrapperImageMainAndDescription}>
          <div className={styles.circleImageMain}>
        <Image
            src="./img/hero/burger-hands-man-is-packing-food.jpg"
            alt="food-kitchen"
            width={400}
            height={400}
            className={styles.fotoHero}
            priority
          />
          </div>
          <p className={styles.descriptionFotoWorkofFoodSta}>Швидка та якісна доставка їжі</p>
          </div>
          <div className={styles.wrapperImageMainAndDescription}>
          <div className={styles.circleImageMain}>
        <Image
            src="./img/hero/waitress-serving-dessert-men.jpg"
            alt="food-kitchen"
            width={400}
            height={400}
            className={styles.fotoHero}
            priority
          />
          </div>
          <p className={styles.descriptionFotoWorkofFoodSta}>Якісне та доброзичливе обслуговування</p>
          </div>
          </div>
      </section>
    );
  }

  export default TheSectionHero;