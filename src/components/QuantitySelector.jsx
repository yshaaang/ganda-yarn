import { useState } from 'react';

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='quantity bg-white flex max-w-0 '>
      <div className='bg-white w-5 px-1 border-r border-r-gray-200'>
        <button onClick={decrementQuantity}>-</button>
      </div>
      <div className='bg-white w-10 px-2 border-r border-r-gray-200'>
        <span>{quantity}</span>
      </div>
      <div className='bg-white w-5 px-1'>
        <button onClick={incrementQuantity}>+</button>
      </div>
    </div>
  );
}

export default QuantitySelector;
