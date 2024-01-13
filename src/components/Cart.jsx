import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import img1 from '../assets/vivobook.jpg';
// import img2 from '../assets/macbook.jpg'

const Cart = () => {
  const { cartItems,subTotal,Tax,shiping,total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const increment = id => {
    dispatch({
      type: 'addToCart', 
      payload:{id},
    });
    dispatch({type:"calculatePrice"})
  };
  const decrement = id => {
    dispatch({
      type: 'decrement', 
      payload:id,
    });
    dispatch({type:"calculatePrice"})
  };
  
  const deletHandler = id => {
    dispatch({
      type: 'deleteFromCart', 
      payload:id,
    });
    dispatch({type:"calculatePrice"})
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map(i => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              increment={increment}
              decrement={decrement}
              deletHandler={deletHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping:${shiping}</h2>
        <h2>Tax:${Tax}</h2>
        <h2>Total:${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deletHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />

    <article>
      <h3>{name}</h3>
      <p>{qty}</p>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deletHandler(id)} />
  </div>
);

export default Cart;
