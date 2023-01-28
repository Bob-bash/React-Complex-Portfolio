import React,{useState,useEffect} from 'react'
import download4 from '../datas/images/download4.jpg'
import {motion} from 'framer-motion'
import '../styles/contact.css'
import {useLocation} from 'react-router-dom'

const Contact = () => {
  const [show, setShow] = useState(false)
  const location=useLocation()
  useEffect(() => {
    const timer=setInterval(() => {
      setShow(true)
    }, 500);
  }, [location])
  return (
      <motion.div 
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{width:'100',transition:{duration:0.1}}}
      className='bg bg-cover bg-no-repeat ' style={{backgroundImage:`url(${download4})`,width:'100%',height:'101vh'}}>
      {show&&(
        <form action="" method="post">
        </form>
        )}
    </motion.div>
    )
       
      
}

export default Contact