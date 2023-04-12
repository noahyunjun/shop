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
      setView(false);
    }, 2000);
    return () => {
      // useEffect가 실행되기 전에 실행되는 코드 부분 입니다.
      clearTimeout(timer);
    };
  }, []);

  let [number, setNumber] = useState(" ");
  useEffect(() => {
    if (isNaN(number) === true) {
      alert("Only Text input");
    }
  }, [number]);

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
          <img src={productId.src} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{productId.title}</h4>
          <p>{productId.content}</p>
          <p>{productId.price}</p>

          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Only Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default DetailView;
