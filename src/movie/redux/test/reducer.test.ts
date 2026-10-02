import { describe, expect, it } from "vitest";
import movieReducer from "../reducer";
import { addMovie, deleteMovie } from "../actions";

describe("Movie reducer", () => {
  it("should add a movie", () => {
    const state: string[] = [];

    const newState = movieReducer(state, addMovie("Pulp fiction"));

    expect(newState).toEqual(["Pulp fiction"]);
  });

  it("should delete a movie", () => {
    const state: string[] = ["Pulp fiction", "Red"];

    const newState = movieReducer(state, deleteMovie(0));

    expect(newState).toEqual(["Red"]);
  });
});
