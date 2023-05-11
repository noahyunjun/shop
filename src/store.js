import { configureStore, createSlice } from "@reduxjs/toolkit";

//useState와 비슷하다고 생각하면 됨
let user = createSlice({
  name: "user", //state 이름
  initialState: "Ham hyeon jun", //state 값
});

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
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    products: products.reducer,
  },
});
