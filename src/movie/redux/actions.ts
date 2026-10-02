export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const RESET = "RESET";

export type AddMovieAction = {
  type: typeof ADD_MOVIE;
  payload: string;
};

export type DeleteMovieAction = {
  type: typeof DELETE_MOVIE;
  payload: number;
};

export type ResetAction = {
  type: typeof RESET;
};

export type MovieActionTypes = AddMovieAction | DeleteMovieAction | ResetAction;

export const addMovie = (title: string): AddMovieAction => {
  return {
    type: ADD_MOVIE,
    payload: title,
  };
};

export const deleteMovie = (index: number): DeleteMovieAction => {
  return {
    type: DELETE_MOVIE,
    payload: index,
  };
};
