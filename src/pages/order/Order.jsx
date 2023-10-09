import React from "react";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";

const Order = () => {
  const context = useContext(MyContext);
  const { name, no } = context;
  return (
    <Layout>
      <h1>name {name}</h1>
      <h1>no {no}</h1>
    </Layout>
  );
};

export default Order;
