import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const getMovieData = async (date) => {
  try {
    if (date) {
      const { data } = await API.get(`/movie?date=${date}`);
      // console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getMovieVid = async (name, id) => {
  try {
    if (id) {
      const vidId = await API.get(`/video?id=${id}`);
      console.log(vidId.data);
      if (vidId) {
        return vidId;
      }
    }
    if (name) {
      const vidId = await API.get(`/video?name=${name}`);
      console.log(vidId.data);
      return vidId;
    }
  } catch (error) {
    console.log(error);
  }
};
