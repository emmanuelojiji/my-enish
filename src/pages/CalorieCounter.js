import "./CalorieCounter.scss";
import { useEffect, useRef, useState } from "react";
import { ProductData } from "../productData";
import ProductCard from "../components/ProductCard";

const CalorieCounter = ({ setIsNavBarVisible }) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(ProductData);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [isSelectedProductsExpanded, setIsSelectedProductsExpanded] =
    useState(false);

  let previousScrollValue = 0; // Store the previous scroll value

  window.onscroll = () => {
    const currentScrollValue = Math.round(window.scrollY);
    console.log(currentScrollValue);

    if (currentScrollValue > previousScrollValue + 5) {
      // Scrolled down by more than 10 pixels
      setIsNavBarVisible(false);
    } else if (currentScrollValue < previousScrollValue) {
      // Scrolled up by more than 10 pixels
      setIsNavBarVisible(true);
    }

    previousScrollValue = currentScrollValue; // Update the previous scroll value
  };

  return (
    <div className="calorie-counter page">
      <div className="header">
        <div className="total-circle">
          <h2 className="total">{total}</h2>
          <p>Calories</p>
        </div>
      </div>

      <input
        type="text"
        className="search"
        placeholder="Search for item"
      ></input>

      {total > 0 && (
        <div className={`selected-items ${total > 0 ? "fade-in" : "fade-out"}`}>
          <h3
            onClick={() => {
              setIsSelectedProductsExpanded(!isSelectedProductsExpanded);
              console.log(isSelectedProductsExpanded);
            }}
          >
            Selected Items
          </h3>

          <div
            className={`card-container ${
              isSelectedProductsExpanded ? "expanded" : null
            }`}
          >
            {products
              .filter((product) => product.quantity > 0)
              .map((product) => (
                <ProductCard
                  productId={product.id}
                  product_name={product.name}
                  product_desc={product.desc}
                  product_quantity={product.quantity}
                  calories={product.calories}
                  products={products}
                  setProducts={setProducts}
                  total={total}
                  setTotal={setTotal}
                  selectedProducts={selectedProducts}
                  setSelectedProducts={setSelectedProducts}
                  forSelectedItemsTransition={true}
                />
              ))}
          </div>
        </div>
      )}

      <h3 className="sub-heading">Menu</h3>
      <div className="card-container">
        {products.map((product) => (
          <ProductCard
            productId={product.id}
            product_name={product.name}
            product_desc={product.desc}
            product_quantity={product.quantity}
            calories={product.calories}
            products={products}
            setProducts={setProducts}
            total={total}
            setTotal={setTotal}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            setIsSelectedProductsExpanded={setIsSelectedProductsExpanded}
          />
        ))}
      </div>
    </div>
  );
};

export default CalorieCounter;
