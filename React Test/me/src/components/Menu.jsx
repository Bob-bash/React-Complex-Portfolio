import React from 'react'
import download2 from '../datas/images/download2.jpg'
import {motion} from 'framer-motion'

const Menu = () => {
  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{width:'100%',transition:{duration:0.1}}}
    style={{backgroundImage:`url(${download2})`,height:'101vh',width:'100%'}} 
    className='bg-no-repeat bg-cover  bg-center'></motion.div>
  )
}

export default Menu