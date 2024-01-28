import { configureStore } from "@reduxjs/toolkit";
import mydetailsReducer from "../components/features/mydetails";

const store = configureStore({
  reducer: {
    mydetails: mydetailsReducer,
  },
});

export default store;
