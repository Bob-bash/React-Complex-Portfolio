import React,{useEffect} from 'react'
import './error.css'
import { useDispatch } from 'react-redux'
function Error() {
  const dispatch=useDispatch()
  const handleload=e=>{
    dispatch({type:'HEADERSHOW',payload:false})
  }
  useEffect(() => {
    window.addEventListener('load',handleload)
    return () => {
      window.removeEventListener('load',handleload)
    };
  }, [handleload]);
  return (
    <div className='error'>
        <strong>Please check your internet on.</strong>
    </div>
  )
}

export default Error