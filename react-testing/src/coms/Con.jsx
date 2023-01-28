import React from 'react'
import './con.css'
function Con({img,des,name,p,key}) {
  return (
    <div className='conw'>
      <img src={img} alt="" className='con__img'/>
      <div className="con">
        <p className='con__p'>{des}</p>
        <div className="con__line"></div>
        <h2 
        style={{textAlign:'center'}}
        >{name}</h2>
        <p>{p}</p>
      </div>
    </div>
  )
}

export default Con