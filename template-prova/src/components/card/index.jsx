import { useState } from "react";
import "./styles.css";

export function Card({ coffeeImg, tags, title, description, price }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="card">
      <img src={coffeeImg} alt={title} className="coffeeImg" />
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <h1>{title}</h1>
      <p className="description">{description}</p>

      <div className="details">
        <div className="price">
          <p>
            R$ <strong>{(price * quantity).toFixed(2)}</strong>
          </p>
        </div>

        <div className="quantityButtons">
          <button type="button" onClick={decreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
