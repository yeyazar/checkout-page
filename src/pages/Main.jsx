import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "../components/AddProduct";
import Button from "../components/Button";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Main = () => {
  const BASE_URL = "https://63fa2bf8beec322c57eeb667.mockapi.io/data";
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [card, setCard] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      setCard(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (newProduct) => {
    try {
      await axios.post(BASE_URL, newProduct);
    } catch (error) {
      console.log(error);
    }
    getProduct();
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleMinus = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      await axios.put(`${BASE_URL}/${id}`, { quantity: --data.quantity });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlus = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      await axios.put(`${BASE_URL}/${id}`, { quantity: ++data.quantity });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
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
      {showAddProduct && <AddProduct postData={postData} />}
      <div>
        {card?.map((data) => {
          return (
            <ProductCard
              data={data}
              key={data.id}
              handleMinus={handleMinus}
              handleDelete={handleDelete}
              handlePlus={handlePlus}
              getProduct={getProduct}
            />
          );
        })}
      </div>
      <div>
        <CardTotal data={card} />
      </div>
    </div>
  );
};

export default Main;
