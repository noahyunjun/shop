import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// class Details extends React.Component {
//   componentDidMount() {
//     // mount
//   }
//   componentDidUpdate() {
//     // update
//   }
//   componentWillUnmount() {
//     // unmount
//   }
// }

const DetailView = (props) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      console.log(2);
      setView(false);
    }, 2000);
    return () => {
      // useEffect가 실행되기 전에 실행되는 코드 부분 입니다.
      clearTimeout(timer);
      console.log(1);
    };
  }, []);

  let [view, setView] = useState(true);

  let { id } = useParams();
  let productId = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {view ? (
            <div className="alert alert-warning">2초이내 구매시 할인</div>
          ) : (
            ""
          )}
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{productId.title}</h4>
          <p>{productId.content}</p>
          <p>{productId.price}</p>

          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
