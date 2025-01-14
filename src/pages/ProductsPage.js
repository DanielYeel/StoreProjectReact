import React, { useState, useEffect } from "react";
import "../styles/ProductsPage.css";
import ProductsList from "../components/ProductsList";
import PriceFilter from "../components/PriceFilter";

function ProductsPage({ addToCart }) {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const formattedProducts = data.products.map((item) => ({
          name: item.title,
          price: item.price,
          img: item.thumbnail, 
        }));
        setAllProducts(formattedProducts);
        setFilteredProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="products-page-container">
      <h1>List of Products</h1>
      <div className="filter-container">
        {!isLoading && (
          <PriceFilter
            products={allProducts}
            setFilteredProducts={setFilteredProducts}
          />
        )}
      </div>
      <ProductsList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}

export default ProductsPage;
