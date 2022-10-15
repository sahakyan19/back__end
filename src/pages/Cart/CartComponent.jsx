import React from 'react'
import Cart from './Cart'
import './CartComponent.css'
import './CartComponentResponsive.css'


export default function CartComponent({cart, addToCart, removeCart, clearCart, theme}) {


  const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)
  

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}}  className='cart-component-container'>
      <div className="cart-title-box">
        <h3 style={theme ? {color: '#fff', borderColor: '#fff'} : {color: '#000'}} className='cart-title'>Cart</h3>
      </div>
      <div className="no-items-cart">
        {
          cart.length === 0
          ?
          <h1>No products are added.</h1>
          :
          <div className='cart-component'>
          {
            cart.map((item) => {
              return <Cart key={item.id} item={item} addToCart={addToCart} removeCart={removeCart} theme={theme} />
            })
          }
          </div>
        }
        </div>
      <div className="total-price-box">
        {
          cart.length > 0 ? <button className='cart-clear-button' onClick={clearCart}>Clear All</button> : <button className='cart-clear-button-dis' disabled={true}>Clear All</button>
        }
        <h3 style={theme ? {color: '#fff', borderColor: '#fff'} : {color: '#000'}} className='total-price'>Total: ${totalPrice}</h3>
      </div>
      
    </div>
  )
}
