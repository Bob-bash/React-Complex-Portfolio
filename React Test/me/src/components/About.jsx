import React from 'react'
import download3 from '../datas/images/download-3.jpg'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    style={{backgroundImage:`url(${download3})`,height:'101vh'}} 
    className=' bg-center bg-cover bg-no-repeat   w-full'>About</motion.div>
  )
}

export default About