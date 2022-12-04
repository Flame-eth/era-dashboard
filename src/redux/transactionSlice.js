import { createSlice } from "@reduxjs/toolkit";
import Image1 from "../assets/img-8.jpeg";
import Image2 from "../assets/img-9.jpeg";
import Image3 from "../assets/img-10.jpeg";
import Image4 from "../assets/img-11.jpeg";
import Image5 from "../assets/img-12.jpeg";
import Image6 from "../assets/img-13.jpeg";
import Image7 from "../assets/img-14.jpeg";
import Image8 from "../assets/img-15.jpeg";

const initialState = {
  data: [
    {
      img: Image1,
      hash: "#1254",
      price: "New bid of 51.20Ξ ($210,265)",
    },
    {
      img: Image2,
      hash: "#9844",
      price: "New bid of 111Ξ ($455,848)",
    },
    {
      img: Image3,
      hash: "#4156",
      price: "Offered for 63.95Ξ ($262,626)",
    },
    {
      img: Image4,
      hash: "#1281",
      price: "Offered for 63.95Ξ ($262,626)",
    },
    {
      img: Image5,
      hash: "#4841",
      price: "Bought for 53.83Ξ ($221,066)",
    },
    {
      img: Image6,
      hash: "#6904",
      price: "New bid of 52.52Ξ ($215,686)",
    },
    {
      img: Image7,
      hash: "#5254",
      price: "Bought for 52Ξ ($213,550)",
    },
    {
      img: Image8,
      hash: "#3346",
      price: "Offered for 56Ξ ($229,977)",
    },
  ],
};

export const transactionSlice = createSlice({
  name: "transaction",
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
  },
});

// Action creators are generated for each case reducer function
export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
