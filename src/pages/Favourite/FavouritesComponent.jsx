import React from 'react'
import Favourite from './Favourite'
import './FavouritesComponent.css'
import './FavouritesComponentResponsive.css'

export default function FavouritesComponent({fav, deleteFavourite, clearFav, theme}) {

  const totalPrice = fav.reduce((price, item) => price + item.quantity * item.price, 0)

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className='favourite-component-container'>
      <div className="favourite-title-box">
        <h3 style={theme ? {color: '#fff', borderColor: '#fff'} : {color: '#000'}} className="favourite-title">Favourites</h3>
      </div>
      <div className="no-items-favourite">
        {
          fav.length === 0
          ?
          <h1>No products are added.</h1>
          :
          <div className='favourite-component'>
          {
            fav.map((item) => {
              return <Favourite key={item.id} item={item} deleteFavourite={deleteFavourite} theme={theme} />
            })
          }
          </div>
        }
        </div>
      <div className="total-price-box">
        {
          fav.length > 0 ? <button className='favourite-clear-button' onClick={clearFav}>Clear All</button> : <button className='favourite-clear-button-dis' disabled={true}>Clear All</button>
        }
        <h3 style={theme ? {color: '#fff'} : {color: '#000'}} className='total-price'>Total: ${totalPrice}</h3>
      </div>
      
    </div>
  )
}
