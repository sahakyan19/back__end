import React from 'react'
import { FaSearch } from 'react-icons/fa'
import ShopHeader from '../ShopHeader.jsx/ShopHeader'
import Tablet from '../Tablet/Tablet'
import './TabletComponent.css'
import './TabletComponentResponsive.css'

export default function TabletComponent({addToCart, addFavourite, tablet, inpVal, setInpVal, clickToSearchTablet, theme}) {

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className="tablet-component-container">
      <ShopHeader theme={theme}/>
      <div className="tablet-component-content">
        <div className="tablet-list-box">
          <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}} className="tablet-list">
            <form className="tablet-srch-button-box" onSubmit={(e) => {
              e.preventDefault()
              clickToSearchTablet
            }}>
              <input type="text" className='tablet-srch' value={inpVal} onChange={(e) => setInpVal(e.target.value)} placeholder='Search tablets...' autoFocus/>
              <button className="tablet-srch-button" onClick={clickToSearchTablet}><FaSearch className='tablet-srch-icon'/></button>
            </form>
            <div className="tablet-title-box"> 
              <h3 className="tablet-title">Tablets</h3>
            </div>
            <div className="list">

            {
              tablet.filter((tablet) => tablet.type === 'tablet').map((tablet) => {
                return <Tablet key={tablet.id} tablet={tablet} addToCart={addToCart} addFavourite={addFavourite} theme={theme}/>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
