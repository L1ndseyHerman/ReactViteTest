import type { MovieActionTypes } from "./actions";

const initialState: string[] = [];

const movieReducer = (
  state = initialState,
  action: MovieActionTypes,
): string[] => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.payload];

    case "DELETE_MOVIE":
      return state.filter((_, index) => index !== action.payload);

    default:
      return state;
  }
};

export default movieReducer;
