import React from 'react'
import './services.css'
import person from '../data/person.png'
import splash from '../data/splash.png'
import cer from '../data/certificate.png'
function Services() {
  return (
    <div className='services' id='services'>
      <div className="services__l">
        <h1>Hey There <br/> I'm Binjan</h1>
        <a href="https://www.googles.com" className='services__link'>zainkeepscode@gmail.com</a>
        <div className="services__l__b">
          <h1>10</h1>
          <h3>Years<br/>Experience</h3>
        </div>
      </div>  

      <div className="services__c">
        <img src={person} alt="" className='person'/>
        <img src={splash} alt=""  className='splash'/>
      </div>

      <div className="services__r">
        <p className="services__r_t">I design beautiful simple things,And I love what i do</p>
        <div className="services__r_b">
          <img src={cer} alt=""  className='cer'/>
          <p className='cer__text'>CERTIFIED PROFATIONAL UI/UX DESIGNER</p>
        </div>
      </div>
    </div>
  )
}

export default Services