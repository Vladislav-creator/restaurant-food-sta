
import styles from "./page.module.css";
  import dynamic from 'next/dynamic';

const metadata = {
  title: 'Кафе-ресторан "Food Sta"',
  description: 'Кафе-ресторан "Food Sta" - це недорого та якісно, це вишукані блюда для вас наші дорогі відвідувачи',
};

 
 const SectionHero = dynamic(() => import('./components/SectionHero/SectionHero'), { ssr: false });
 const Reviews = dynamic(() => import('./components/Reviews/Reviews'), { ssr: false });
export default function Home() {
  return (
    <div>
   
    <main className={styles.main}>
      <h1><span className={styles.titleCafeRestaurant}>Кафе-ресторан</span> <span className={styles.titleFoodSta}>"Food Sta"</span></h1>
      <video className={styles.video} controls width="640" height="360">
        <source src="./video-restaurant.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео в формате MP4.
      </video>
     <SectionHero />
     <h2>Що кажуть наші відвідувачі?</h2>
      <Reviews/>
    </main>
    </div>
  );
}

export { metadata };