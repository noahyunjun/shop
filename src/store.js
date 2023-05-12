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
      let number = state.findIndex((a) => {
        // 조건식에 맞는 것들 출력
        return a.id == action.payload;
      });
      state[number].count += 1;
    },
    addItem(state, action) {
      state.push(action.payload);
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

export let { plusCount, addItem } = products.actions;

//js distrcturing
