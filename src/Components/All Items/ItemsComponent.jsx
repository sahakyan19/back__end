import React from 'react'
import ShopHeader from '../ShopHeader.jsx/ShopHeader'
import Items from './Items'
import {FaSearch} from 'react-icons/fa'
import './ItemsComponent.css'
import './ItemsComponentResponsive.css'

export default function ItemsComponent({addToCart, addFavourite, product, inpVal, setInpVal, clickToSearchAll, theme}) {


  return (
    <>
      <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className="items-component-container">
        <ShopHeader theme={theme}/>
        <div className="items-component-content">
          <div className='items-list-box'>
            <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}}  className="items-list">
              <form className="items-srch-button-box" onSubmit={(e) => {
                e.preventDefault()
                clickToSearchAll
              }}>
                <input type="text" className='items-srch' value={inpVal} onChange={(e) => setInpVal(e.target.value)} placeholder='Search all products...' autoFocus/>
                <button className="items-srch-button" onClick={clickToSearchAll}><FaSearch className='items-srch-icon'/></button>
              </form> 
              <div className="items-title-box"> 
                <h3 className="items-title">All Products</h3>
              </div>
              <div className="list">
              {
                product.map((item) => {
                  return <Items key={item.id} item={item} addToCart={addToCart} addFavourite={addFavourite} theme={theme}/>
                })
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
