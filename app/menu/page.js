import TheSlider from '../components/Slider/Slider';

import { getAllDishes } from '../services';

const metadata = {
  title: 'Меню кафе-ресторана "Food Sta"',
  description: 'Меню кафе-ресторана "Food Sta"',
};


const MenuPage = async () => {
  let initialDishes = [];
  
  try {
    const data = await getAllDishes();
    initialDishes = data.sort((a, b) => a.level - b.level);
  } catch (error) {
    console.error("Error fetching dishes:", error);
  }
  
  return (
  <div >
    <h1>Меню</h1>
      <TheSlider initialDishes={initialDishes} />
    </div>
  );
};

export default MenuPage;
export { metadata };