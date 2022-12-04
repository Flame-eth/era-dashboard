import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
  account: "",
  contract: {},
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    setMode: (state) => {
      state.mode = !state.mode;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setContract: (state, action) => {
      state.contract = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMode, setAccount, setContract } = modeSlice.actions;

export default modeSlice.reducer;
