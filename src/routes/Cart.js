import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  //getting redux store
  let products = useSelector((state) => state.products);
  return (
    <div>
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
          {products.map((products, i) => {
            return (
              <tr key={i}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.count}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
