import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'x-RapidAPI-Key': '0a5110bc4bmshf1617496b802d13p164608jsnce9ef5e35447',
    'x-RapidAPI-Host': 'bayut.p.rapidapi.com'
  },
  });
    
  return data;
}