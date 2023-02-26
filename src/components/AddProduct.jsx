import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

const AddProduct = ({ postData }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(product);
    setProduct({
      name: "",
      price: 0,
      quantity: 0,
      image: "",
    });
  };

  return (
    <form className="w-75 m-auto mt-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Product Price
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Product Quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">
          Product Image
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success ">
            <AiOutlineShoppingCart /> Add to Cart <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
