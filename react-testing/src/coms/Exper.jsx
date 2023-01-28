import React from 'react'
import './exper.css'
function Exper({backcolor,icon,t,des,handleclick}) {
  return (
    <div className='exper'
    onClick={handleclick}
    >
        <div className="exper__iconw"
        style={{backgroundColor:backcolor}}
        >
            {icon}
        </div>
        <div className='exper__r'>
            <h2 className='exper__r__t'>{t}</h2>
            <span className='exper__r__des'>{des}</span>
        </div>
    </div>
  )
}

export default Exper