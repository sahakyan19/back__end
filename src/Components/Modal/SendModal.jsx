import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa"
import './SendModal.css'
import './SendModalResponsive.css'

export default function SendModal({theme}) {
  return (
    <div className='sendmodal-container'>
        <div style={theme ? {background: '#1F232A'} : {background: '#fff'}} className='sendmodal-box'>
        <FaRegCheckCircle className='sendmodal-icon'/>
        <span style={theme ? {color: '#fff'} : {color: '#000'}} className='sendmodal-span'>Your message has been succesfully sent!</span>
        </div>
    </div>
  )
}
