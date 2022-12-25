import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const getMovieData = async (date) => {
  try {
    const { data } = await API.get(`/movie?date=${date}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

