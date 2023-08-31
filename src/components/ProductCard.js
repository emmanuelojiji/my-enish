import "./ProductCard.scss";
import { useState, useEffect } from "react";

const ProductCard = ({
  product_name,
  product_desc,
  calories,
  products,
  total,
  setTotal,
}) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setTotal(total + calories);
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setTotal(total - calories);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <div>
        <div className="name-calories-wrap">
          <h3>{product_name}</h3>
          <p>{calories}</p>
        </div>
        <p>{product_desc}</p>
      </div>

      <div className="button-container">
        {!quantity ? (
          <button
            onClick={() => {
              incrementQuantity();
            }}
          >
            Add
          </button>
        ) : (
          <>
            <button
              onClick={() => decrementQuantity()}
              className="quantity-button"
            >
              -
            </button>
            <h3>{quantity}</h3>
            <button
              onClick={() => incrementQuantity()}
              className="quantity-button"
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
