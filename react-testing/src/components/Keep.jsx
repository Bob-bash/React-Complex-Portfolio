import React,{useState} from 'react'
import './keep.css'
import {GrFormClose} from 'react-icons/gr'
function Keep() {
  const [keepshow, setKeepshow] = useState(true);
  return (
      <div className='keep'
      style={{
        opacity:keepshow?'1':'0'
      }}
      >
        <GrFormClose className='keep__close'
        onClick={e=>{
          setKeepshow(false)
        }}
        />
        <span className='keep__span'>Keep</span>
      </div>
  )
}

export default Keep