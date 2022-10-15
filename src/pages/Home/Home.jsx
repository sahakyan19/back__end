import React from 'react'
import Slider from '../../Components/Slider'
import { MdOutlineLocalShipping, MdHelpOutline } from "react-icons/md"
import { TbShoppingCartDiscount } from "react-icons/tb"
import { CgSmartphoneRam } from "react-icons/cg"
import { BsSmartwatch,BsFillCameraFill } from "react-icons/bs"
import "./Home.css"
import "./HomeResponsive.css"

export default function Home({theme}) {

  const homeIconDarkStyle = theme ? {color: '#fff'} : {color: '#000'}
  const homeBoxDarkStyle = theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}

  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className='home-container'>
      <Slider/>
      <div className={theme ? 'home-btn theme-dark-2' : 'home-btn'}>
        <div style={homeBoxDarkStyle} className='home-box'>
          <MdOutlineLocalShipping style={homeIconDarkStyle} className='icons'/>
          <div>
          <h3 className='texts'>FREE SHIPPING</h3>
          <p className='texts'>For orders over $50</p>
          </div>
        </div>
        <div style={homeBoxDarkStyle} className='home-box'>
          <TbShoppingCartDiscount style={homeIconDarkStyle} className='icons'/>
        <div>
        <h3 className='texts'>OFFICIAL DISCOUNTS</h3>
          <p className='texts'>Save Big on next product</p>
        </div>
        </div>
        <div style={homeBoxDarkStyle} className='home-box'>
          <MdHelpOutline style={homeIconDarkStyle} className='icons'/>
          <div>
            <h3 className='texts'>24/7 HELPLINE</h3>
            <p className='texts'>Care till the and</p>
          </div>
        </div>
      </div>
      <div style={homeBoxDarkStyle} className='home-content'>
        <h1 className='home-text-h1'>WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
        <p className='home-text-p'>EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
        <div className='home-div-box'>
          <div className='home-div'>
            <BsFillCameraFill style={homeIconDarkStyle} className='div-icon'/>
            <h4 className='div-text'>PERFECT CUT</h4>
            <h3 className='div-text'>DUAL CAMERA</h3>
            <p className='div-text-p'>Tristique senectus et netus et malesuada ant reiet fames.</p>
          </div>
          <div className='home-div'>
            <BsSmartwatch style={homeIconDarkStyle} className='div-icon'/>
            <h4 className='div-text'>PRETTY</h4>
            <h3 className='div-text'>INNTELLIGENT PROCESSING</h3>
            <p className='div-text-p'>Consequat ac habit amet asse felis donec et odio pellentesque diam.</p>
          </div>
          <div className='home-div'>
            <CgSmartphoneRam style={homeIconDarkStyle} className='div-icon'/>
            <h4 className='div-text'>MOST POPULAR</h4>
            <h3 className='div-text'>8GB DDR5 RAM</h3>
            <p className='div-text-p'>Dictum varius duis at consectetur lorem donec massa sap faucibus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
