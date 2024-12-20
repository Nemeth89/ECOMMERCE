import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(AppContext);

  const totalPrice = cartItems?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item._id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
