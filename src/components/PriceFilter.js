import { useState, useEffect } from "react";
import "../styles/PriceFilter.css";

export default function PriceFilter({ products, setFilteredProducts }) {
  const [selectedPrice, setSelectedPrice] = useState(0);

  const minPrice = products.length
    ? Math.min(...products.map((product) => product.price))
    : 0;
  const maxPrice = products.length
    ? Math.max(...products.map((product) => product.price))
    : 0;

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.price <= selectedPrice
    );
    setFilteredProducts(filtered);
  }, [selectedPrice, products, setFilteredProducts]);

  useEffect(() => {
    setSelectedPrice(maxPrice);
  }, [maxPrice]);

  return (
    <div className="price-filter-container">
      <span className="lowest-price">${minPrice}</span>
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={selectedPrice}
        step={0.01}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
      />
      <span className="highest-price">${maxPrice}</span>
      <p>Selected Price: ${selectedPrice}</p>
    </div>
  );
}
