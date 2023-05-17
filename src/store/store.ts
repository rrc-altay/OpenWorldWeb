import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/store/rootReducer";
import axiosProject from "@/lib/http";

const extraArgument = axiosProject;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }).concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Store = {
  dispatch: AppDispatch;
  state: RootState;
  extra: typeof extraArgument;
};

export default store;
