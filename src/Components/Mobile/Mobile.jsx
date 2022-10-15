import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router';
import './Mobile.css'


export default function Mobile({ mobile, addToCart, addFavourite, theme }) {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/shop/mobiles/mobile`, {state: {mobiles: mobile}})
  }

  const mobileThemeStyle = theme ? {color: '#fff'} : {color: '#000'}

  return (
    <div style={theme ? {color: '#fff', background: '#545961'} : {color: '#000'}} className='mobile-container'>
      <div className='mobile-count-box'>
        <span className='mobile-count'>{mobile.count}</span>
      </div>
      <span className='heart-icon' onClick={() => addFavourite(mobile)}><FiHeart/></span>
      <div className="mobile-img-box">
        <img src={mobile.img} alt="" className="mobile-img" />
      </div>
      <div className='model-color-price-box'>
        <span style={mobileThemeStyle} className="mobile-model">{mobile.model}</span>
        <span style={mobileThemeStyle} className='mobile-color'>Color: {mobile.color}</span>
        <div className='memory-price-box'>
          <span style={mobileThemeStyle} className='mobile-memory'>Memory: {mobile.memory}GB</span>
          <span style={mobileThemeStyle} className='mobile-price'>${mobile.price}</span>
        </div>
      </div>
      <div className="mobile-buttons-box">
        <button className="buy-mobile" onClick={() => addToCart(mobile)}>Add <FaCartPlus/></button>
        <button className='details-mobile' onClick={showDetail}>Details</button>
      </div>
    </div>
  )
}
