import { ref, set } from "firebase/database";
import database from "./FirebaseDB"; 
import "../styles/Purchase.css"

function Purchase(items) {
  const addToCart = (event) => {
    const productData = {
      img: items.product.img,
      title: items.product.name,
      price: items.product.price,
    };
    const uniqueKey = productData.title;

    set(ref(database, "ProductsList/" + uniqueKey), productData)
      .then(() => {
        console.log("Product added to cart successfully!");
      });
  };

  return (
    <div className="purchase-section">
      <button className="purchase-btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Purchase;
