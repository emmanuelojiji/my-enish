import "./CalorieCounter.scss";
import { useEffect, useRef, useState } from "react";
import { ProductData } from "../productData";
import ProductCard from "../components/ProductCard";
import gradient from "../media/gradient.svg";

const CalorieCounter = ({ setIsNavBarVisible }) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(ProductData);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [isSelectedProductsExpanded, setIsSelectedProductsExpanded] =
    useState(false);


  

  return (
    <div className="calorie-counter page">
      <div className="header">
        <img className="header-gradient" src={gradient} />
        <div className="total-circle">
          <h1 className="total">{total}</h1>
          <p className="calories">CALORIES</p>
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
