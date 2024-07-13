
// import AboutComponent from '../components/AboutComponent/AboutComponent';
// import style from './about.module.css';

// export const metadata = {
//   title: 'Команда поваров Кафе-ресторана "Food Sta"',
//   description: 'Про команду поваров Кафе-ресторана "Food Sta"',
// };

// async function fetchCooksData() {
//   const { getCooks } = await import('../services');
//   const data = await getCooks();
//   const headChef = data.find(cook => cook.position === "Головний кухар");
//   const otherCooks = data.filter(cook => cook.position !== "Головний кухар");
//   return { headChef, otherCooks };
// }

// const AboutPage = async () => {
//   const { headChef, otherCooks } = await fetchCooksData();

//   return (
//     <div className={style.colorText}>
//       <AboutComponent headChef={headChef} otherCooks={otherCooks} />
//     </div>
//   );
// };

// export default AboutPage;

// app/about/page.js
import AboutComponent from '../components/AboutComponent/AboutComponent';
import style from './about.module.css';

export const metadata = {
  title: 'Команда поваров Кафе-ресторана "Food Sta"',
  description: 'Про команду поваров Кафе-ресторана "Food Sta"',
};

async function fetchCooksData() {
  const { getCooks } = await import('../services');
  const data = await getCooks();
  const headChef = data.find(cook => cook.position === "Головний кухар");
  const otherCooks = data.filter(cook => cook.position !== "Головний кухар");
  return { headChef, otherCooks };
}

const AboutPage = async () => {
  const { headChef, otherCooks } = await fetchCooksData();

  return (
    <div className={style.colorText}>
      <AboutComponent headChef={headChef} otherCooks={otherCooks} />
    </div>
  );
};

export default AboutPage;