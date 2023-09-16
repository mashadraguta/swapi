import {
  personCharacterArray,
  personCharacter,
  movies,
} from "../models/reduxModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialCharState: personCharacterArray = {
  allCharacters: [],
  character: {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [""],
    created: "",
    edited: "",
    url: "",
  },
  allMovies: [],
  movies: {
    title: "",
    episode_id: 0,
    opening_crawl: "",
    director: "",
    producer: "",
    release_date: "",
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    created: "",
    edited: "",
    url: "",
  },
  loading: false,
  pageNr: 1,
  error: null,
};

const charSlice = createSlice({
  name: "character",
  initialState: initialCharState,
  reducers: {
    setChar(state, action: PayloadAction<personCharacter[]>) {
      state.allCharacters = action.payload;
    },
    setParticularChar(state, action: PayloadAction<personCharacter>) {
      state.character = action.payload;
    },
    setMovies(state, action: PayloadAction<movies[]>) {
      state.allMovies = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.pageNr = action.payload;
    },
  },
});

export default charSlice;
