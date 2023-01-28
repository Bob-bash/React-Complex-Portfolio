import React from 'react'
import './contact.css'
import Slider from "react-slick";
import {Con} from '../coms'
import per1 from '../data/people1.png'
import per2 from '../data/people2.png'
import {sliderSettings} from '../data/constant.js'

function Contact() {
  const con=[
    {img:per1,des:'I will you with finging a solution and solve your problem,We use process desigin to create digital products.Besides that also help their business.',name:'Anamika Sandula',p:'Creative Manager'},
    {img:per2,des:'I will you with finging a solution and solve your problem,We use process desigin to create digital products.Besides that also help their business.',name:'Anamika Sandula',p:'Creative Manager'},
    {img:per1,des:'I will you with finging a solution and solve your problem,We use process desigin to create digital products.Besides that also help their business.',name:'Anamika Sandula',p:'Creative Manager'},
    {img:per2,des:'I will you with finging a solution and solve your problem,We use process desigin to create digital products.Besides that also help their business.',name:'Anamika Sandula',p:'Creative Manager'},
    {img:per1,des:'I will you with finging a solution and solve your problem,We use process desigin to create digital products.Besides that also help their business.',name:'Anamika Sandula',p:'Creative Manager'},
  ]
  return (
    <div className='contact' id='contact'>
      <h1>People talk about us</h1>
      <p className='contact_p'>I got a job that was in accordance with the salary and field of work
        The proccess of submitting an application wa quite cosy.
      </p>
        <Slider {...sliderSettings}
        className='contact__b'
        >
            {con.map(item=>(
              <Con 
              img={item.img}
              des={item.des}
              name={item.name}
              p={item.p}
              key={`${item.name}_1`}
              />
            ))}
        </Slider>
    </div>
  )
}

export default Contact