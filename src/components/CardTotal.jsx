/* import {  useState } from "react"; */

const CardTotal = ({ data }) => {
  /* console.log(data); */

  /* const [subTotal, setSubTotal] = useState(0); */

  let subTotal = 0;

  data.map((item) => {
    return (subTotal = subTotal + item.price * item.quantity);
  });
/*   console.log(subTotal); */

  return (
    <div className="card m-auto mt-2 mb-5" style={{ width: "36rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Subtotal <span className="d-flex flex-row-reverse">{subTotal}$</span>
        </li>
        <li className="list-group-item">
          Tax(18%) <span className="d-flex flex-row-reverse">{subTotal*0.18}$</span>
        </li>
        <li className="list-group-item">
          Shipping <span className="d-flex flex-row-reverse">{25}$</span>
        </li>
        <li className="list-group-item">
          Total <span className="d-flex flex-row-reverse">{subTotal+subTotal*0.18+25}$</span>
        </li>
      </ul>
    </div>
  );
};

export default CardTotal;
