import React from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

export default function Arrows({prevSlide, nextSlide}) {
  return (
    <div className='arrows'>
      <span className='prev-slide' onClick={prevSlide}><FaChevronLeft/>
      </span>
      <span className='next-slide' onClick={nextSlide}><FaChevronRight/></span>
    </div>
  )
}
