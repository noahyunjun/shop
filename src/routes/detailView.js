import { useParams } from "react-router-dom";

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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
