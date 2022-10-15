import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaCartPlus, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import './Header.css'
import './HeaderResponsive.css'


export default function Header({fav, cart, openModal, theme, changeTheme}) {
  
  const [click, setClick] = useState(false);
  const clickHandle = () => { setClick(!click)};

  const navigate = useNavigate()

  return (
    <div style={theme ? {color: '#fff', background: '#361B65'} : {color: '#000'}} className='header'>
      <div className="nav-bar">
        <Link to='/' className="logo-header">SMZ</Link>
        <div className="nav-items">
          <div  className={click ? 'nav-menu-box active-box' : 'nav-menu-box'}>
            <ul className='nav-menu'>
              <li className="nav-list">
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className="nav-list">
                <Link to='/shop/all-products' className="nav-link">Shop</Link>
              </li>
              <li className="nav-list">
                <Link to='/about' className="nav-link">About</Link>
              </li>
            <div className='nav-button-box'>
              <button className="nav-button" onClick={openModal}>Contact</button>
            </div>
            </ul>
          </div>
          <div className='cart-favourite-box'>
            <button className="favourite-box" onClick={() => navigate('/favourites')}>
              <FiHeart className='favourite-icon'/>
              <span className='badge'>{fav.length}</span>
            </button>
            <button className="cart-plus-box" onClick={() => navigate('/cart')}>
              <FaCartPlus className='cart-plus-icon'/>
              <span className='badge'>{cart.length}</span>
            </button>
          </div>
          <div className="theme-box" onClick={changeTheme}>
            { theme ? <FaSun style={{color: 'gold'}} /> : <FaMoon style={{color: 'gold'}}/> }
          </div>
        </div>
      </div>
      <div className="hamburger" onClick={clickHandle}>
          {click ? <FaTimes style={{color: '#fafafa'}} size={30}/> : <FaBars style={{color: '#fafafa'}} size={30}/>}
      </div>
    </div>
  )
}
