import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router';
import './Accessorie.css'


export default function Accessorie({ accessorie, addToCart, addFavourite, theme }) {

  const navigate = useNavigate()

  const showDetail = () => {
    navigate(`/shop/accessories/accessorie`, {state: {accessories: accessorie}})
  }

  const accessorieThemeStyle = theme ? {color: '#fff'} : {color: '#000'}

  return (
    <div style={theme ? {color: '#fff', background: '#545961'} : {color: '#000'}} className='accessorie-container'>
      <div className='accessorie-count-box'>
        <span className='accessorie-count'>{accessorie.count}</span>
      </div>
      <span className='heart-icon' onClick={() => addFavourite(accessorie)}> <FiHeart/></span>
      <div className="accessorie-img-box">
        <img src={accessorie.img} alt="" className="accessorie-img" />
      </div>
      <div className='model-color-price-box'>
        <span style={accessorieThemeStyle} className="accessorie-model">{accessorie.model}</span>
        <span style={accessorieThemeStyle} className='accessorie-color'>Color: {accessorie.color}</span>
        <div className='memory-price-box'>
          {accessorie.memory === undefined ? null : <span style={accessorieThemeStyle} className='accessorie-memory'>Memory: {accessorie.memory}GB</span>}
          <span style={accessorieThemeStyle} className='accessorie-price'>${accessorie.price}</span>
        </div>
      </div>
      <div className="accessories-button-box">
        <button className="buy-accessorie" onClick={() => addToCart(accessorie)}>Add <FaCartPlus/></button>
        <button className='details-accessories' onClick={showDetail}>Details</button>
      </div>
    </div>
  )
}