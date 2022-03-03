import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await axios.get("http://localhost:3000/api/products");
    setProducts(result.data.products)
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return <div data-cy="product-list">

    {products.map(product => (  
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    ))}
  </div>;
};

export default Menu;
