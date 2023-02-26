/* import { useState } from "react"; */
import { AiFillDelete } from "react-icons/ai";

const ProductCard = ({
  data,
  handleMinus,
  handlePlus,
  handleDelete,
  getProduct,
}) => {
  const { name, image, price, quantity, id } = data;

  return (
    <div className="card p-3 mt-4 m-auto" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex flex-row-reverse">
          <p className="card-text">{price}$</p>
        </div>

        <div className="d-flex gap-3 justify-content-center p-1 m-1 align-items-center">
          <button
            onClick={() => {        
              quantity !== 1 && handleMinus(id);
              setTimeout(getProduct, 1000);
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              handlePlus(id);
              setTimeout(getProduct, 1000);
            }}
          >
            +
          </button>
        </div>

        <div className="text-center mt-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDelete(id);
              getProduct();
            }}
          >
            Remove <AiFillDelete />
          </button>
        </div>

        <div className="text-center mt-2">
          <p>
            Total Price : <span>{price*quantity}</span>$
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
