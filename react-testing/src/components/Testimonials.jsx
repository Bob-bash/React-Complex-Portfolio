import React from 'react'
import './testimonial.css'
import case1 from '../data/showCase1.png'
import case2 from '../data/showCase2.png'
import case3 from '../data/showCase3.png'
function Testimonials() {
  const test=[
    {img:case1},
    {img:case2},
    {img:case3},
  ]
  return (
    <div className='test' id='testimonials'>
      <h1>My Lastest Works</h1>
      <div className="test__ts">
        <p>Perfect solution for digital experience</p>
        <a href="#" className='services__link'>Explore More Works</a>
      </div>
      <div className="test_imgs">
        {test.map(item=>(
          <img src={item.img} className='text__img'/>
        ))}
      </div>
    </div>
  )
}

export default Testimonials