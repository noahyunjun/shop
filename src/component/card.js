import { useNavigate } from "react-router-dom";

const Products = (props) => {
  console.log(props.id);
  let navigate = useNavigate();
  let id = props.id;

  return (
    <div
      onClick={() => {
        navigate(`/detail/` + id);
      }}
    >
      <img src={props.shoes.src} alt="" width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default Products;
