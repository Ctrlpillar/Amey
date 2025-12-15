import "./Card.css";

function Card({ product, isLiked, onLikeToggle, onBack }) {
  return (
    <div className="card-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      {/* Like Button */}
      <button
        className={`like-btn ${isLiked ? "liked" : ""}`}
        onClick={() => onLikeToggle(product.id)}
      >
        ♥
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="card-image"
      />

      <h2>{product.name}</h2>
      <p className="card-desc">{product.description}</p>
      <h3>₹ {product.price}</h3>

      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default Card;
