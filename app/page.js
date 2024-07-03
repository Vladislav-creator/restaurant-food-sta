
import styles from "./page.module.css";
  import dynamic from 'next/dynamic';

const metadata = {
  title: "Restaurant-food-sta",
  description: "Restaurant-food-sta",
};

 const Slider = dynamic(() => import('./components/Slider/Slider'), { ssr: false });

export default function Home() {
  return (
    <div>
   
    <main className={styles.main}>
      <h1>Ресторан <span className={styles.titleFoodSta}>"Food Sta"</span></h1>
      <div className={styles.description}>
         <Slider /> 
      </div>
    </main>
    </div>
  );
}

export { metadata };