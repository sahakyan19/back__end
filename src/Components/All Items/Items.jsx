import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import './Items.css'


export default function Items({ item, addToCart, addFavourite, theme}) {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/shop/all-products/product`, {state: {product: item}})
  }

  const allProductsThemeStyle = theme ? {color: '#fff'} : {color: '#000'}

  return (
    <div style={theme ? {color: '#fff', background: '#545961'} : {color: '#000'}} className='items-container'>
      <div className='items-count-box'>
        <span className='items-count'>{item.count}</span>
      </div>
      <span className='heart-icon' onClick={() => addFavourite(item)}><FiHeart/></span>
      <div className='items-img-box'>
        <img src={item.img} alt="" className="items-img" />
      </div>
      <div className='model-color-price-box'>
        <span style={allProductsThemeStyle}  className="items-model">{item.model}</span>
        <span style={allProductsThemeStyle} className='items-color'>Color: {item.color}</span>
        <div className='memory-price-boxes'>
          {item.memory === undefined ? null : <span style={allProductsThemeStyle} className='items-memory'>Memory: {item.memory}GB</span>}
          <span style={allProductsThemeStyle} className='items-price'>${item.price}</span>
        </div>
      </div>
      <div className='items-buttons-box'>
        <button className='buy-items' onClick={() => addToCart(item)}>Add <FaCartPlus/></button>
        <button className='details-items' onClick={() => showDetail(item)}>Details</button>
      </div>
    </div>
  )
}
