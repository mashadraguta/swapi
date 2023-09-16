import { configureStore } from "@reduxjs/toolkit";
import charSlice from "./swapiSlice";

const store = configureStore({
  reducer: { character: charSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
