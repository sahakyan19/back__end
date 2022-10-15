import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineEmail} from 'react-icons/md'
import { BiTime } from 'react-icons/bi'
import { GoLocation }from 'react-icons/go'
import { FaFacebookF,FaTelegramPlane,FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import './Footer.css'
import './FooterResponsive.css'


export default function Footer({theme}) {
  return (
    <div style={theme ? {color: '#fff', background: '#361B65'} : {color: '#000'}} className='footer-container'>
      <div className="footer-logo-box">
        <Link to='/' className='footer-logo'>CONTACT</Link>
      </div>
      <div className="footer-row-boxes">
        <div className="footer-left-box">
          <div className='icon-box'>
            <div>
              <FaFacebookF className='icon'/>
            </div>
            <div>
              <GrInstagram className='icon'/>
            </div>
            <div>
              <FaTelegramPlane className='icon'/>
            </div>
            <div>
              <FaTwitter className='icon'/>
            </div>
          </div>
        </div>
        <div className="footer-right-box">
          <div className='location'>
            <GoLocation className='icon'/>
            <p>1234 Street Name, City Name, United States</p>
          </div>
          <div className="phone">
            <FiPhone className='icon'/>
            <p>0992 234234 / 0234 234234</p>
          </div>
          <div className='email'>
            <MdOutlineEmail className='icon'/>
            <p>hello@yoursite.com</p>
          </div>
          <div className='time'>
            <BiTime className='icon'/>
            <p>09:00 - 21:00</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <span className='footer-copyright-text'>Ⓒ Copyright 2022 By Perfect Team</span>
      </div>
    </div>
  )
}
