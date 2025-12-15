import "./ProductCard.css";

function ProductCard({ product, onSelect }) {
  return (
    <div
      className="product-item"
      onClick={() => onSelect(product)}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;
