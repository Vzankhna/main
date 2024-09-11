import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import MyContext from '../../Common/Context/Mycontext';

const Cart = () => {
  const { cart, setCart,removeProductFromCart,handleIncreaseQuantity,handleDecreaseQuantity,token } = useContext(MyContext);
  const[load,setLoad] = useState(true)

useEffect(() => {

  if(!token){
    return 
  }
  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:9000/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    
      const data = await response.json();
      setCart(data.cartInfo);
      sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
    } catch (error) {
      alert('please try again')
    } finally {
      setLoad(false);
    }
  };

  fetchCartItems();
}, [setCart,token]);
  


if(load){
  <p>loading...</p>
}


  return (
    <div className="cart-container">

    {cart && <h1>cart Details</h1>}

 
      {cart && cart.length > 0 ? (
        <>
          {cart
            .sort((a,b)=>b._id.localeCompare(a._id))
            .map((item) => (
            <div className="cart-item" key={item.productid}>
              <img src={item.productimage} alt={item.productname} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.productname}</h3>
                <p>Price:${item.productprice}</p>
                <div className="cart-item-controls">
                  <button onClick={() => handleDecreaseQuantity(item.categoryid,item.productid)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(item.categoryid,item.productid)}>+</button>
                  <button onClick={() => removeProductFromCart(item.categoryid,item.productid)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          {cart && cart.length>0 &&
            <>
          <div className="total-summary">
            <p>Total Items: {cart.length}</p>
            <p>Total Price: </p>
          </div>
          <button className="checkout-button" onClick={()=>window.location.href='/checkout'}>Checkout</button>
          </>

          }
        </>
      ) : (
        <p>No cart data</p>
      )}
    </div>
  );
};

export default Cart;
