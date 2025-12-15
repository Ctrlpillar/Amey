import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Card from "../Components/Card";
import "./Product.css";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);

  const handleLikeToggle = (id) => {
    setLikedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...prev, id]
    );
  };

  // Show detailed card
  if (selectedProduct) {
    return (
      <Card
        product={selectedProduct}
        isLiked={likedProducts.includes(selectedProduct.id)}
        onLikeToggle={handleLikeToggle}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  // Product list
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={setSelectedProduct}
        />
      ))}
    </div>
  );
}

export default Products;
