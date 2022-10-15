import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Mobile from '../Mobile/Mobile'
import ShopHeader from '../ShopHeader.jsx/ShopHeader'
import './MobileComponent.css'
import './MobileComponentResponsive.css'

export default function MobileComponent({addToCart, addFavourite, mobile, inpVal, setInpVal, clickToSearchMobile, theme}) {

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className="mobile-component-container">
      <ShopHeader theme={theme}/>
      <div className="mobile-component-content">
        <div className='mobile-list-box'>
          <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}} className="mobile-list">
            <form className="mobile-srch-button-box" onSubmit={(e) => {
              e.preventDefault()
              clickToSearchMobile
            }}>
              <input type="text" className='mobile-srch' value={inpVal} onChange={(e) => setInpVal(e.target.value)} placeholder='Search mobiles...' autoFocus/>
              <button className="mobile-srch-button" onClick={clickToSearchMobile}><FaSearch className='mobile-srch-icon'/></button>
            </form>
            <div className="mobile-title-box"> 
              <h3 className="mobile-title">Mobiles</h3>
            </div>
            <div className="list">
            {
              mobile.filter((mobile) => mobile.type === 'mobile' ).map((mobile) => {
                return <Mobile key={mobile.id} mobile={mobile} addToCart={addToCart} addFavourite={addFavourite} theme={theme}/>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
