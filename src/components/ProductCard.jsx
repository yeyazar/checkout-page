import { AiFillDelete } from "react-icons/ai";

const ProductCard = ({BASE_URL}) => {



  return (
    <div className="card p-3" style={{ width: "18rem" }}>
      <img
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ67VUs8xNe7tll4sDd0jSNrMgsuvJ18CnEQcppHjxkKyBmrdjeSFJ5NykRYzKQqLYwV1cLK_ojbpon0T0j1e8iOzEQ6nKr3TuSykqqYMZJY4DCcBwK_HvHYYFDyco&usqp=CAE"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Product Name</h5>
        <p className="card-text">Price</p>
        <div className="d-flex gap-3 justify-content-center p-1 m-1 align-items-center">
          <button>-</button>
          <span>Quantity</span>
          <button>+</button>
        </div>

        <div className="text-center">
          <button className="btn btn-danger">
            Remove <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
