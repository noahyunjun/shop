import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "../store/userSlice";
import { plusCount } from "../store";

function Cart() {
  //getting redux store
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); //store.js에 요청을 보내주는 함수다

  return (
    <div>
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
                  <button
                    onClick={() => {
                      dispatch(plusCount(i));
                    }}
                  >
                    +
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
