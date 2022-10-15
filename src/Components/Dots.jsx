import React from 'react'

export default function Dots({activeIndex, onclick, ImageData}) {
  return (
    <div className='all-dots'>
      {
        ImageData.map((slide, index) => (
          <span key={index} className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`} onClick={() => onclick(index)}></span>
        ))
      }
    </div>
  )
}
