import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

export const getMovieData = async (date) => {
  try {
    if (date) {
      const response = await API.get(`/movie?date=${date}`);
      // console.log(data);
      let responseOK = response && response.status === 200 && response.statusText === 'OK';
      if (responseOK) {
      let data = await response.data;
      return data;
    } 
    }
  } catch (error) {
    alert(error.response.data);
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
    alert(error);
    console.log(error);
  }
};
