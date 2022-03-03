import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await axios.get("http://localhost:3000/api/products");
    setProducts(result.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Menu</h2>
      <div data-cy="product-list">
        {products.map((product) => (
          <div style={{ display: "grid", gridTemplateColumns: "30vw 30vw" }}>
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div>
              <p style={{ paddingTop: 5 + "%" }}>{product.price} kr</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
