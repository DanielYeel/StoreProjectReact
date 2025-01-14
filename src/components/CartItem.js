import { ref, remove } from "firebase/database";
import database from "../components/FirebaseDB";
import "../styles/CartProduct.css";

function CartItem({ item }) {
  const removeItem = async (key) => {
    const dbRef = ref(database, "ProductsList/" + key);
    await remove(dbRef);
    window.location.reload();
  };

  return (
    <div className="cart-item-container">
      <img
        className="cart-item-img"
        src={item.img}
        alt={item.title}
      />
      <h3 className="cart-item-name">{item.title}</h3>
      <h4 className="cart-item-price">${item.price}</h4>
      <button
        className="btn btn-danger remove-btn"
        onClick={() => removeItem(item.title)}
      >
        X
      </button>
    </div>
  );
}

export default CartItem;
