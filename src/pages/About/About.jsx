import React from 'react'
import { BsPhoneVibrate } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { TbBellRinging } from "react-icons/tb"
import './About.css'
import './AboutResponsive.css'


export default function About({theme}) {
  return (
    <div style={theme ? {color: '#fff', background: '#1F232A'} : {color: '#000'}} className='about-container'>
      <div style={theme ? {color: '#fff', background: '#393f4a'} : {color: '#000'}} className="about-content">
      <div className='about-left-box'>
        <h1 className='about-title'>About</h1>
        <p className='about-text1'>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
          Pariatur eum consequuntur amet quibusdam hic ipsa,
          ullam necessitatibus ex numquam facere autem officia
          eligendi molestias minima quod quos. Cumque, quasi ex!
        </p>
        <p className='about-text2'>Lorem ipsum dolor sit amet,consectetur adipisicing elit.
          Pariatur eum consequuntur amet quibusdam hic ipsa.
        </p>
      </div>
      <div className='about-right-box'>
        <div className='about-box'>
          <div className='about-icon'>
            <BsPhoneVibrate className='phoneicon'/>
          </div>
          <div className='about-text'>
            <h3 className='about-text-h3'>Research</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Veritatis expedita quam sequi voluptatum facilis praesentium
            molestiae repellat.
            </p>
          </div>
        </div>
        <div className='about-box'>
          <div className='about-icon'>
            <FiSettings className='phoneicon'/>
          </div>
          <div className='about-text'>
            <h3 className='about-text-h3'>Strategy</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Veritatis expedita quam sequi voluptatum facilis praesentium
            molestiae repellat.
            </p>
          </div>
        </div>
        <div className='about-box'>
          <div className='about-icon'>
            <TbBellRinging className='phoneicon'/>
          </div>
          <div className='about-text'>
            <h3 className='about-text-h3'>Design</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Veritatis expedita quam sequi voluptatum facilis praesentium
            molestiae repellat.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
