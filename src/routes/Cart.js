import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "../store/userSlice";
import { plusCount, deleteItem } from "../store";
import { memo, useMemo, useState } from "react";

//자식 컴포넌트의 지속적인 리렌더링을 막기 위해서 memo를 사용한다.
//이 함수가 리렌더링 되기 위해서는 이 컴포넌트에 props가 전달되고, 그 props가 변경되어야 한다.
//memo를 쓰면 기존 props와 신규 props를 계속 비교하는 현상이 생김.
//props가 길고 복잡하면 안좋음. (거의 쓸일 없다)
let Child = memo(function () {
  console.log("rerender");
  return <div>child</div>;
});

function 함수() {
  return 1;
}
function Cart() {
  //getting redux store

  //useMemo -> 컴포넌트 렌더링시 1회만 실행합니다.
  //지속적인 렌더링을 막는 함수 useEffect와 비슷한 역할을 합니다.
  let result = useMemo(() => {
    return 함수();
  });

  let state = useSelector((state) => state);

  let dispatch = useDispatch(); //store.js에 요청을 보내주는 함수다

  let [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ++
      </button>
      <h3>{state.user.name}의 장바구니</h3>
      <h4>{state.user.age}살</h4>
      <button
        onClick={() => {
          dispatch(changeAge(1));
        }}
      >
        Plus Age
      </button>
      <Table>
        <thead>
          <tr>
            <th>number</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((products, i) => {
            return (
              <tr key={i}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.count}</td>
                <td>
                  <button onClick={() => dispatch(plusCount(products.id))}>
                    +
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch(deleteItem(products.id))}>
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
