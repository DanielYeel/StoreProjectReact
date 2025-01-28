import ProductItem from "./ProductItem";
import "../styles/ProductsPage.css";

export default function ProductList(items) {
  return (
    <div className="products-grid">
      {items.products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          img={product.img}
          addToCart={items.addToCart}
        />
      ))}
    </div>
  );
}
