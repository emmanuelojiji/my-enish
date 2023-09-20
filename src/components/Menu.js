import "./Menu.scss";
import ProductCard from "./ProductCard";

const Menu = ({
  products,
  total,
  setTotal,
  setProducts,
  selectedProducts,
  setSelectedProducts,
  isSelectedProductsExpanded,
  setIsSelectedProductsExpanded,
}) => {
  return (
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
  );
};

export default Menu;
