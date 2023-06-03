import { useNavigate } from "react-router-dom";

const LateProducts = (props) => {
  let navigate = useNavigate();
  let id = props.id;
  let realId = id + 1;
  return (
    <span
      onClick={() => {
        navigate(`/detail/` + id);
      }}
    >
      <img
        src={"https://codingapple1.github.io/shop/shoes" + realId + ".jpg"}
        alt=""
        width="40%"
      />
    </span>
  );
};

export default LateProducts;
