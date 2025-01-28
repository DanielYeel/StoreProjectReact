import Purchase from "./Purchase";
import "../styles/ProductsPage.css";

function ProductItem(items) {
  return (
    <div className="product-card">
      <img className="image-container" src={items.img} alt={items.name} />
      <h3>{items.name}</h3>
      <p>${items.price}</p>
      <Purchase product={items} />
    </div>
  );
}

export default ProductItem;
