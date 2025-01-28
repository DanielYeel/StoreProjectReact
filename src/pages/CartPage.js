import React, { useEffect, useState } from "react";
import { ref, get, remove } from "firebase/database";
import database from "../components/FirebaseDB";
import CartItem from "../components/CartItem";
import "../styles/CartProduct.css";
import "../styles/CartPage.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [deleteToggle, setDeleteToggle] = useState(false);

  const fetchCartItems = async () => {
    try {
      const dbRef = ref(database, "ProductsList");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setCartItems(data);

        const total = data.reduce((sum, item) => sum + parseFloat(item.price), 0);
        setCartTotal(total);
      } else {
        console.log("No cart items found.");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [deleteToggle]);

  const clearCart = async () => {
    try {
      const dbRef = ref(database, "ProductsList");
      await remove(dbRef);
      console.log("Cart cleared successfully.");
      setDeleteToggle((prev) => !prev);
    } catch (error) {
      console.error("Failed to clear the cart:", error);
    }
  };

  return (
    <div className="cart-page-container">
      <div className="cart-info-container">
        <p className="cart-title">Your Cart:</p>
        <p className="cart-total">
          Total Price: <span className="to-pay">${cartTotal.toFixed(2)}</span>
        </p>
        <p className="total-items">Total Items: {cartItems.length}</p>
        <button
          className="btn btn-danger reset-cart"
          onClick={clearCart}
        >
          Reset Cart
        </button>
        <button className="btn btn-success purchase-btn" disabled>
          Purchase
        </button>
      </div>
      <div className="items-container">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
