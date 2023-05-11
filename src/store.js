import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

//useState와 비슷하다고 생각하면 됨

let stock = createSlice({
  name: "stock", //state 이름
  initialState: [10, 11, 12], //state 값
});

let products = createSlice({
  name: "products",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    plusCount(state, action) {
      state[action.payload].count += 1;
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    products: products.reducer,
  },
});

export let { plusCount } = products.actions;

//js distrcturing
