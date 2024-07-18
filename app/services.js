
import axios from 'axios';

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export const getAllDishes = async () => {
  const { data } = await axios.get(`${BASEURL}/dishes`);
  return data;
};

export const getCooks = async () => {
  const { data } = await axios.get(`${BASEURL}/cooks`);
  return data;
};