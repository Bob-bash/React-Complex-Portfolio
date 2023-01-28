import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer__l">
            <h1>Let's make sometion<br/>amazing together.</h1>
            <h2
            className='footer__l__h2'
            >Start by 
                <a href="#" className='services__link'>saying hi</a>
            </h2>
        </div>
        <div className="footer__r">
            <div className="footer__r__t">
                <h3>Information</h3>
                <span>145 New York.FL 5467.USA</span>
            </div>
            <div className="footer__r__b">
                <p className="footer__r__bp">Services</p>
                <p className="footer__r__bp">Works</p>
                <p className="footer__r__bp">Notes</p>
                <p className="footer__r__bp">Experience</p>
            </div>
        </div>
    </div>
  )
}

export default Footer