import dynamic from 'next/dynamic';
//import style from './menu.module.css'
const metadata = {
  title: 'Меню кафе-ресторана "Food Sta"',
  description: 'Меню кафе-ресторана "Food Sta"',
};

const Slider = dynamic(() => import('../components/Slider/Slider'), { ssr: false });

export default function About() {
  return (
    <div>
        <h1>Меню</h1>
      <Slider />
    </div>
  );
}

export { metadata };