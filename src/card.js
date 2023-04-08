const Products = (props, index) => {
  return (
    <div className="col-md-4">
      <img src={props.shoes.src} alt="" width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
};

export default Products;
