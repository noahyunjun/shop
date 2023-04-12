import { useNavigate } from "react-router-dom";

const Products = (props) => {
  let navigate = useNavigate();
  let id = props.id;
  let realId = id + 1;
  console.log(id + 1);
  return (
    <div
      onClick={() => {
        navigate(`/detail/` + id);
      }}
    >
      <img
        src={"https://codingapple1.github.io/shop/shoes" + realId + ".jpg"}
        alt=""
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default Products;
