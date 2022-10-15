import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './Favourite.css'
import './FavouriteResponsive.css'


export default function Favourite({item, theme, deleteFavourite}) {
  
  const favouriteThemeStyle = theme ? {color: '#fff'} : {color: '#000'}

  return (
    <div>
      <div style={theme ? {color: '#fff', background: '#545961'} : {color: '#000'}} className='favourite-container'>
        <button className='favourite-delete-button' onClick={() => deleteFavourite(item)}><FaTimes className='favourite-delete-icon'/></button>
      <div className='favourite-count-box'>
        <span className='favourite-count'>{item.count}</span>
      </div>
      <img src={item.img} alt="" className="favourite-img" />
      <div className='favourite-model-color-price-box'>
        <span style={favouriteThemeStyle} className="favourite-model">{item.model}</span>
        <span style={favouriteThemeStyle} className='favourite-color'>Color: {item.color}</span>
        <div className='memory-price-boxes'>
          {item.memory === undefined ? null : <span style={favouriteThemeStyle} className='favourite-memory'>Memory: {item.memory}GB</span>}
          <span style={favouriteThemeStyle} className='favourite-price'>${item.price}</span>
        </div>
      </div>
    </div>
    </div>
  )
}
