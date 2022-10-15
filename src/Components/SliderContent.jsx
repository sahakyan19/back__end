import React from 'react'

export default function SliderContent({activeIndex, ImageData}) {
  return (
    <div>
      {
        ImageData.map((slide, index) => (
          <div key={index} className={index === activeIndex ? 'slides active' : 'inactive'}>
            <img src={slide.url} className='slide-img' alt='' />
            <h3 className='slide-title'>{slide.title}</h3>
            <p className='slide-description'>{slide.description}</p>
          </div>
        ))
      }
    </div>
  )
}
