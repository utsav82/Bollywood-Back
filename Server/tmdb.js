import axios from "axios";
export const URL_MOVIE = "https://api.themoviedb.org/3/";

export function search(date1, date2) {
  try {
    const result = axios.get(URL_MOVIE + "discover/movie", {
      params: {
        api_key: process.env.API_KEY_TMDB,
        sort_by: "popularity.desc",
        with_original_language: "hi",
        "primary_release_date.gte": date1,
        "primary_release_date.lte": date2,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}

export function trailer(name) {
  try {
   
    const result = axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: process.env.API_KEY_YT,
        type: "video",
        part: "snippet",
        maxResults: 1,
        q: name + "hindi bollywood movie trailer",
      },
    });
    
    return result;
  } catch (err) {
    console.log(err);
  }
}

export function TMDBtrailer(id) {
  try {
    const result = axios.get(URL_MOVIE + "movie/" + id + "/videos", {
      params: {
        api_key: process.env.API_KEY_TMDB,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}
