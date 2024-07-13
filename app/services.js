import axios from 'axios';

export const getAllDishes = async () => {
  const { data } = await axios.get(
      //`https://backend-restaurant-food-sta.onrender.com/dishes`
      `http://localhost:8000/dishes`
  );

  return data;
};




export const getCooks = async () => {
  const { data } = await axios.get(
       // `https://backend-restaurant-food-sta.onrender.com/cooks`
    `http://localhost:8000/cooks`
  );

  return data;
};
  