import React from 'react'
import { useState, useEffect } from 'react'
import Arrows from './Arrows'
import Dots from './Dots'
import ImageData from './ImageData'
import SliderContent from './SliderContent'
import './Slider.css'
import './SliderResponsive.css'


const length = ImageData.length

export default function Slider(props) {

  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1)
    }, 3000)
    return () => clearInterval(interval);
  }, [activeIndex])

  return (
    <div className='slider-container'>
      <SliderContent activeIndex={activeIndex} ImageData={ImageData} />
      <Arrows
        prevSlide={() => setActiveIndex(activeIndex < 1 ? length - 1 : activeIndex - 1)}
        nextSlide={() => setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1)}
      />
      <Dots
        activeIndex={activeIndex}
        ImageData={ImageData}
        onclick={activeIndex => setActiveIndex(activeIndex)}
      />
    </div>
  )
}
