
import dynamic from 'next/dynamic';
import style from './about.module.css'
const metadata = {
  title: 'Команда поваров Кафе-ресторана "Food Sta"',
  description: 'Про команду поваров Кафе-ресторана "Food Sta"',
};

const AboutComponent = dynamic(() => import('../components/AboutComponent/AboutComponent'), { ssr: false });

export default function About() {
  return (
    <div className={style.colorText}>
      <AboutComponent />
    </div>
  );
}

export { metadata };

  