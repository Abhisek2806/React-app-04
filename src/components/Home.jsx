import React from 'react';
import img1 from '../assets/vivobook.jpg';
import img2 from '../assets/macbook.jpg';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
  const productList = [
    { name: 'Mac Book', price: 15000, imgSrc: img1, id: '123' },
    { name: 'Vivo Book', price: 25000, imgSrc: img2, id: '456' },
  ];

  const dispatch = useDispatch();
  const addToCartHandler = options => {
    console.log(options);
    dispatch({ type: 'addToCart', payload: options });
    dispatch({type:"calculatePrice"})
    toast.success('Added To Cart');
  };
  return (
    <div className="home"> 
      {productList.map(i => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
