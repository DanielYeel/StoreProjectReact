import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  function goToCart() {
    navigate("/cart");
  }

  return (
    <div className="header-buttons">
      <button onClick={goHome}>Home</button>
      <button onClick={goToCart}>Cart</button>
    </div>
  );
}

export default Header;
