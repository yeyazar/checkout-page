import axios from "axios";
import { useState } from "react";
import AddProduct from "../components/AddProduct";
import Button from "../components/Button";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Main = () => {
  const BASE_URL = "https://63fa2bf8beec322c57eeb667.mockapi.io/data";
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [card, setCard] = useState();

  const getProduct = async () => {
    try {
      let data = await axios.get(BASE_URL);
      data = data.data;
      setCard(data);
      console.log(card);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Button
        onClick={() => setShowAddProduct(!showAddProduct)}
        state={showAddProduct}
      />
      {showAddProduct && (
        <AddProduct BASE_URL={BASE_URL} getProduct={getProduct} />
      )}
      <ProductCard data={card} />
      <CardTotal />
    </div>
  );
};

export default Main;
