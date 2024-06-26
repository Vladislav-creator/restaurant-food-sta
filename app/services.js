import axios from 'axios';

export const getAllDishes = async () => {
  const { data } = await axios.get(
    `https://backend-restaurant-food-sta.onrender.com/dishes`
  );

  return data;
};
  