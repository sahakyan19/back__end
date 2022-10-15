import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGripHorizontal, FaHeadphonesAlt, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import './ShopHeader.css'
import './ShopHeaderResponsive.css'

export default function ShopHeader({theme}) {

  const NavLinkStyle = theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'};

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className="shop-header-container">
      <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}}  className='shop-link-boxes'>
        <NavLink style={NavLinkStyle} to='/shop/all-products' className='item-box boxes'><FaGripHorizontal className='mobile-icon icon-shop-tab'/>All Products</NavLink>
        <NavLink style={NavLinkStyle} to='/shop/mobiles' className='mobile-box boxes'><FaMobileAlt className='mobile-icon icon-shop-tab'/>Mobiles</NavLink>
        <NavLink style={NavLinkStyle} to='/shop/tablets' className='tablet-box boxes'><FaTabletAlt className='tablets-icon icon-shop-tab'/>Tablets</NavLink>
        <NavLink style={NavLinkStyle} to='/shop/accessories' className='accesories-box boxes'><FaHeadphonesAlt className='accesories-icon icon-shop-tab'/>Accessories</NavLink>
      </div>
    </div>
  )
}
