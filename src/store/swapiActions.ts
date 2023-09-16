import charSlice from "./swapiSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { personCharacter, movies } from "../models/reduxModels";
import { TodoService } from "../service/swapiService";

export const charActions = charSlice.actions;

//ALL CHARS

export const fetchChars = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().character.allCharacters.length === 0) {
      const response: personCharacter[] = await TodoService.getAllCharacters();
      dispatch(charActions.setChar(response));
    }
  };
};

//PAGINATION

export const fetchNextChars = (
  pageNr: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(charActions.setLoading(true));
    const response: personCharacter[] = await TodoService.getNextCharacters(
      pageNr
    );

    dispatch(charActions.setChar(response));
    dispatch(charActions.setPage(pageNr));
    dispatch(charActions.setLoading(false));
  };
};

// PARTICULAR CHARACTER
export const fetchParticularChar = (
  name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(charActions.setLoading(true));
    const response: personCharacter = await TodoService.getCharacter(name);
    dispatch(charActions.setParticularChar(response));

    dispatch(charActions.setLoading(false));
  };
};

export const fetchParticularMovies = (
  filmUrls: Array<string>
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(charActions.setIsFetching(true));
    const response: movies[] = await TodoService.getMovies(filmUrls);
    dispatch(charActions.setMovies(response));
    dispatch(charActions.setIsFetching(false));
  };
};
