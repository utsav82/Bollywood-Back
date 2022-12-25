export const initialState = {
  birthdate: null,
  movie_data: null,
  youtube_url: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_BIRTHDATE":
      return {
        ...state,
        birthdate: action.birthdate,
      };

    case "SET_MOVIE_DATA":
      return {
        ...state,
        movie_data: action.movie_data,
      };

    case "SET_YOUTUBE_URL":
      return {
        ...state,
        youtube_url: action.youtube_url,
      };

    default:
      return state;
  }
};

export default reducer;
