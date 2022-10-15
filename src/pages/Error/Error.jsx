import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import ErrorImg from './ErrorImage/error.png'
import './Error.css'
import './ErrorResponsive.css'

export default function Error({theme}) {
  return (
    <div className='error-container' style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}}>
      <div className='error-box' style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}}>
        <div className='error-img-box'>
          <img src={ErrorImg} className="error-img" />
        </div>
        <div className='error-desc-box'>
          <div className="error-desc">
            <h3 className='error-404'>404</h3>
            <BiErrorCircle className='error-icon'/>
            <span className='error-text'>Page not found!</span>
          </div>
          <div className='error-button-box'>
            <Link to='/' className='error-button'>Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
