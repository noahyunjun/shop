import { useParams } from "react-router-dom";
import styled from "styled-components";
// 이 밑에있는 style 버튼은 컴포넌트를 생성하는 것과 동일함. 따라서 대문자로 작성
let YButton = styled.button`
  background: ${(props) => props.color};
  color: ${(props) => (props.color === "blue" ? "white" : "black")};
`;

let NewButton = styled.button(YButton)`
  // 커스텀
`;

const DetailView = (props) => {
  let { id } = useParams();
  let productId = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{productId.title}</h4>
          <p>{productId.content}</p>
          <p>{productId.price}</p>

          <YButton color="blue">button</YButton>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
