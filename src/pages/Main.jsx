import { useState } from "react";
import AddProduct from "../components/AddProduct";
import Button from "../components/Button";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Main = () => {

  const BASE_URL = "https://63f94c8a473885d837cc3b67.mockapi.io/products";

  const [showAddProduct, setShowAddProduct] = useState(false);
 /*  console.log(showAddProduct); */

  return (
    <div>
      <Header />
      <Button
        onClick={() => setShowAddProduct(!showAddProduct)}
        state={showAddProduct}
      />
      {showAddProduct && <AddProduct BASE_URL={BASE_URL}/>}
      <ProductCard />
      <CardTotal />
    </div>
  );
};

export default Main;
