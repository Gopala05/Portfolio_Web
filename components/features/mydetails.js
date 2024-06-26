import { createSlice } from "@reduxjs/toolkit";

export const mydetailsSlice = createSlice({
  name: "mydetails",
  initialState: {
    value: {
      name: "Gopala Krishna V",
      domain1: "Software",
      intro:
        "I am a versatile tech enthusiast skilled in Web and Android Development, DevOps, IOT and Web3.",
    },
  },
  reducers: {
    desc: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { desc } = mydetailsSlice.actions;
export default mydetailsSlice.reducer;
