
import charSlice, { initialCharState } from "./swapiSlice";

describe("character reducer", () => {
  it("should handle setParticularChar action", () => {
    const character = {
      name: "string",
      height: "string",
      mass: "string",
      hair_color: "string",
      skin_color: "string",
      eye_color: "string",
      birth_year: "string",
      gender: "string",
      homeworld: "string",
      films: [] as Array<string>,
      species: [] as never[],
      vehicles: [] as never[],
      starships: [] as never[],
      created: "",
      edited: "",
      url: "",
    };

    const newState = charSlice.reducer(
      initialCharState,
      charSlice.actions.setParticularChar(character)
    );
    expect(newState.character).toEqual(character);
  });

  it("should handle setLoading action", () => {
    const loading = true;
    const newState = charSlice.reducer(initialCharState, charSlice.actions.setLoading(loading));
    expect(newState.loading).toEqual(loading);
  });

  it("should handle setPage action", () => {
    const pageNr = 2;
    const newState = charSlice.reducer(initialCharState, charSlice.actions.setPage(pageNr));
    expect(newState.pageNr).toEqual(pageNr);
  });
});
