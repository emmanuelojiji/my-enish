import "./ProductCard.scss";
import { useState } from "react";

const ProductCard = ({
  selectdProduct,
  product_name,
  product_desc,
  product_quantity,
  calories,
  total,
  setTotal,
  setProducts,
  productId,
}) => {
  const incrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    setTotal(total + calories);
  };

  const decrementQuantity = (productId) => {
    if (product_quantity > 0) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
    setTotal(total - calories);
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
        {product_quantity === 0 ? (
          <button
            onClick={() => {
              incrementQuantity(productId);
            }}
          >
            Add
          </button>
        ) : (
          <>
            <button
              onClick={() => decrementQuantity(productId)}
              className="quantity-button"
            >
              -
            </button>
            <h3>{product_quantity}</h3>
            <button
              onClick={() => incrementQuantity(productId)}
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
