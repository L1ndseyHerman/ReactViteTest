import { describe, expect, it } from "vitest";
import movieReducer from "../reducer";
import { addMovie } from "../actions";

describe("Movie reducer", () => {
  it("should add a movie", () => {
    const state: string[] = [];

    const newState = movieReducer(state, addMovie("Pulp fiction"));

    expect(newState).toEqual(["Pulp fiction"]);
  });
});
