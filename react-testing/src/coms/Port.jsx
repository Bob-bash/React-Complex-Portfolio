import React from 'react'
import './port.css'
function Port({l_t,l_des,r_t,r_des,backcolor,key}) {
  return (
    <div className='port'>
      <div className="port__l">
        <h2>{l_t}</h2>
        <p>{l_des}</p>
      </div>
      <div className="portw">
        <div className="port__ball"
         style={{
          backgroundColor:backcolor
        }}
        ></div>
        <div className="port__line"
        ></div>
      </div>
      <div className="port__r">
        <h1>{r_t}</h1>
        <p className='port__des'>{r_des}</p>
      </div>
    </div>
  )
}

export default Port