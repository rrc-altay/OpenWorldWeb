import { createSlice } from "@reduxjs/toolkit";
import { ReducerNamespace } from "@/store/types";

interface InitialState {
  count: number;
}

const initialState: InitialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: ReducerNamespace.COUNT,
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export default counterSlice;
