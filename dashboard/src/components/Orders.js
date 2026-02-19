import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="orders-page">
      <h2>Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="order-card">
            <p><span>Name:</span> {order.name }</p>
            <p><span>Qty:</span> {order.qty}</p>
            <p><span>Price:</span> {order.price}</p>
            <p><span>Mode:</span> {order.mode}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
