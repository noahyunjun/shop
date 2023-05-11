import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", //state 이름
  initialState: { name: "ham", age: 25 }, //state 값

  reducers: {
    changeName(state) {
      //state는 기존에 있던 레거시 값이라고 생각하면 됨

      //1. return으로 수정하려는 array나 object를 직접 수정한다.
      //   return { name: "park", age: 30 };
      //2. 직접 array나 obuject 해당 요소를 수정한다.
      state.name = "park";
      //Q. 이러면 주소값이 왜 엉키지 않는걸까?
    },
    changeAge(state, action) {
      //보통 action이라고 이름을 짓는다.
      state.age += action.payload;
    },
    // 함수를 여러개 선언해도 된다.
  },
});

export let { changeName, changeAge } = user.actions;
export default user;
