import React,{useEffect} from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import  './totop.css'
function Totop() {
    const handleclick=e=>{
        window.scrollTo(0,0)
    }
  return (
    <div className='totop'
    onClick={handleclick}
    >
        <AiOutlineArrowUp/>
    </div>
  )
}

export default Totop