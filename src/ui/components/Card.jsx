import { useEffect, useState } from "react";
import './Card.css'; 

export const Card = () => {

  const [product, setProduct] = useState({});

  useEffect(() => {
   
    const id = Math.floor(Math.random() * 100) + 1;

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {setProduct(data)})
  }, []);

  return (
    <div className="card">
      <p>{product.title}</p>
      <p>Description: {product.description}</p>
      <p>USD$: {product.price}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};
