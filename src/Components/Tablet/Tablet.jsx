import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router';
import './Tablet.css'


export default function Tablet({ tablet, addToCart, addFavourite, theme }) {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/shop/tablets/tablet`, {state: {tablets: tablet}})
  }

  const tabletThemStyle = theme ? {color: '#fff'} : {color: '#000'}

  return (
    <div style={theme ? {color: '#fff', background: '#545961'} : {color: '#000'}} className='tablet-container'>
      <div className='tablet-count-box'>
        <span className='tablet-count'>{tablet.count}</span>
      </div>
      <span className='heart-icon' onClick={() => addFavourite(tablet)}><FiHeart/></span>
      <div className="tablet-img-box">
        <img src={tablet.img} alt="" className="tablet-img" />
      </div>
      <div className='model-color-price-box'>
        <span style={tabletThemStyle} className="tablet-model">{tablet.model}</span>
        <span style={tabletThemStyle} className='tablet-color'>Color: {tablet.color}</span>
        <div className='memory-price-box'>
          <span style={tabletThemStyle} className='tablet-memory'>Memory: {tablet.memory}GB</span>
          <span style={tabletThemStyle} className='tablet-price'>${tablet.price}</span>
        </div>
      </div>
      <div className="tablet-buttons-box">
        <button className="buy-tablet" onClick={() => addToCart(tablet)}>Add <FaCartPlus/></button>
        <button className='details-tablet' onClick={showDetail}>Details</button>
      </div>
    </div>
  )
}
