import "./CalorieCounter.scss";
import { useState } from "react";
import { ProductData } from "../productData";
import ProductCard from "../components/ProductCard";

const CalorieCounter = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(ProductData);

  return (
    <div className="calorie-counter page">
      <div className="header">
        <h2 className="total">{total}</h2>
        <p>Calories</p>
      </div>
      <div className="card-container">
        {products.map((product) => (
          <ProductCard
            product_name={product.name}
            product_desc={product.desc}
            calories={product.calories}
            products={products}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </div>
    </div>
  );
};

export default CalorieCounter;
