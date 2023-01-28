import React from 'react'
import download1 from '../datas/images/download1.jpg'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div 
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{width:'100',transition:{duration:0.1}}}
      className=' bg-center bg-no-repeat bg-cover ' 
      style={{backgroundImage:`url(${download1})`,width:'100%',height:'101vh'}}>
    </div>
  )
}

export default Home
