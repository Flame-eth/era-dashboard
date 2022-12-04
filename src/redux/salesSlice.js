import { createSlice } from "@reduxjs/toolkit";
import Image1 from "../assets/img-1.jpeg";
import Image2 from "../assets/img-2.jpeg";
import Image3 from "../assets/img-3.jpeg";
import Image4 from "../assets/img-4.jpeg";
import Image5 from "../assets/img-5.jpeg";
import Image6 from "../assets/img-6.jpeg";
import Image7 from "../assets/img-7.jpeg";
import Image8 from "../assets/img-8.jpeg";

const initialState = {
  data: [
    {
      img: Image1,
      hash: "#3100",
      price: "4.2KΞ ($7.58M)",
      date: "Mar 11, 2021",
    },
    {
      img: Image2,
      hash: "#7408",
      price: "4.2KΞ ($7.57M)",
      date: "Mar 11, 2021",
    },
    {
      img: Image3,
      hash: "#4156",
      price: "4.2KΞ ($10.26M)",
      date: "Dec 09, 2021",
    },
    {
      img: Image4,
      hash: "#5217",
      price: "2.25KΞ ($5.45M)",
      date: "Jul 30, 2021",
    },
    {
      img: Image5,
      hash: "#8857",
      price: "2KΞ ($6.63M)",
      date: "Sep 11, 2021",
    },
    {
      img: Image6,
      hash: "#2140",
      price: "1.6KΞ ($3.76M)",
      date: "Jul 30, 2021",
    },
    {
      img: Image7,
      hash: "#7252",
      price: "1.6KΞ ($5.33M)",
      date: "Aug 24, 2021",
    },
    {
      img: Image8,
      hash: "#2338",
      price: "1.5KΞ ($4.32M)",
      date: "Aug 06, 2021",
    },
  ],
};

export const salesSlice = createSlice({
  name: "sales",
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
export const {} = salesSlice.actions;

export default salesSlice.reducer;
