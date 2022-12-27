export const initialState = {
  birthdate: "",
  movie_data: null,
  youtube_id: null,
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

    case "SET_YOUTUBE_ID":
      return {
        ...state,
        youtube_id: action.youtube_id,
      };

    default:
      return state;
  }
};

export default reducer;
