import { useState, useEffect } from "react";
import cx from "classnames";

function QuantitySelector({
  initialValue = 1,
  onChange = () => {},
  min = 1,
  max = 1,
}) {
  const [quantity, setQuantity] = useState(initialValue);

  const incrementQuantity = () => {
    const q = Math.min(quantity + 1, max);
    setQuantity(Math.min(quantity + 1, max));
    onChange(q);
  };

  const decrementQuantity = () => {
    const q = Math.max(min, quantity - 1);
    setQuantity(q);
    onChange(q);
  };

  return (
    <div className="quantity bg-white flex max-w-0 ">
      <div
        className={cx(
          "bg-white w-5 px-1 border-r border-r-gray-200",
          quantity <= 1 && "invisible"
        )}
      >
        <button onClick={decrementQuantity}>-</button>
      </div>
      <div className="bg-white w-10 px-2 border-r border-r-gray-200">
        <span>{quantity}</span>
      </div>
      {quantity < max && (
        <div className="bg-white w-5 px-1">
          <button onClick={incrementQuantity}>+</button>
        </div>
      )}
    </div>
  );
}

export default QuantitySelector;
