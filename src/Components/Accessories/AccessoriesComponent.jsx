import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Accessorie from '../Accessorie/Accessorie'
import ShopHeader from '../ShopHeader.jsx/ShopHeader'
import './AccessoriesComponent.css'
import './AccessoriesComponentResponsive.css'

export default function AccessoriesComponent({addToCart, addFavourite, accessorie, inpVal, setInpVal, clickToSearchAccessorie, theme}) {
  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className="accessories-component-container">
      <ShopHeader theme={theme}/>
      <div className="accessories-component-content">
        <div className='accessories-list-box'>
          <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}} className="accessories-list">
            <form className="accessories-srch-button-box" onSubmit={(e) => {
              e.preventDefault()
              clickToSearchAccessorie
            }}>
              <input type="text" className='accessories-srch' value={inpVal} onChange={(e) => setInpVal(e.target.value)} placeholder='Search accessories...' autoFocus/>
              <button className="accessories-srch-button" onClick={clickToSearchAccessorie}><FaSearch className='accessories-srch-icon'/></button>
            </form>
            <div className="accessories-title-box"> 
              <h3 className="accessories-title">Accessories</h3>
            </div>
            <div className="list">
            {
              accessorie.filter((accessorie) => accessorie.type === 'accessorie').map((accessorie) => {
                return <Accessorie key={accessorie.id} accessorie={accessorie} addToCart={addToCart} addFavourite={addFavourite} theme={theme}/>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
