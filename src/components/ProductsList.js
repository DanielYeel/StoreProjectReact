import ProductItem from "./ProductItem";

export default function ProductList(items) {
  return (
    <div className="products-grid">
      {items.products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          img={product.image}
          addToCart={items.addToCart}
        />
      ))}
    </div>
  );
}
