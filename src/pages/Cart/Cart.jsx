import React from 'react'
import './Cart.css'
import './CartResponsive.css'

export default function Cart({item, addToCart, removeCart, theme}) {

  const cartThemeStyle = theme ? {color: '#fff'} : {color: '#000'}

  return (
    <div>
      <div style={theme ? {color: '#fff', background: '#545961'} : {color: '#000'}} className='cart-container'>
      <div className='cart-count-box'>
        <span className='cart-count'>{item.count}</span>
      </div>
      <img src={item.img} alt="" className="cart-img" />
      <div className='cart-model-color-price-box'>
        <span style={cartThemeStyle} className="cart-model">{item.model}</span>
        <span style={cartThemeStyle} className='cart-color'>Color: {item.color}</span>
        <div className='memory-price-boxes'>
          {item.memory === undefined ? null : <span style={cartThemeStyle} className='cart-memory'>Memory: {item.memory}GB</span>}
          <span style={cartThemeStyle} className='cart-price'>${item.price}</span>
        </div>
        <div className='cart-plus-minus-box'>
          <button className='cart-minus-button' onClick={() => removeCart(item)} >-</button>
          <div className="cart-length-box">
            <span className='cart-length'>{item.quantity}</span>
          </div>
          <button className='cart-plus-button' onClick={() => item.count !== 0 ? addToCart(item) : null}>+</button>
        </div>
      </div>
    </div>
    </div>
  )
}
