import React from 'react'
import './checkbox.css'
import {useSelector,useDispatch} from 'react-redux'
function Checkbox({backcolor,icon,t,des,handleclick}) {
  const items=useSelector(state=>state.items)
  // const handleclick=e=>{
    // e.target.parentNode.parentNode.remove() 
  // }
  return (
    <div className='checkbox'>
      <div className="checkbox__r">
            <h2>{t}</h2>  
            <p>{des}</p>          
        </div>
      <div className="checkbox__w">
        <div className="checkbox__l" style={{backgroundColor:backcolor}}>
              {icon}
        </div>
        <button className='checkbox__btn'
        onClick={handleclick}
        >
          Remove item       
          </button> 
      </div>
    </div>
  )
}

export default Checkbox