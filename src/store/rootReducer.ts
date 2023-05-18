import { combineReducers } from "redux";
import counterSlice from "@/store/reducers/counterSlice/counterSlice";
import { ReducerNamespace } from "@/store/types";

export const rootReducer = combineReducers({
  [ReducerNamespace.COUNT]: counterSlice.reducer,
});
