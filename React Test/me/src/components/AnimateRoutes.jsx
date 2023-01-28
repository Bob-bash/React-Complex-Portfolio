import React from 'react'
import {About,Contact,Home,Menu} from './index'
import {Routes,Route,useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
const AnimateRoutes = () => {
    const location=useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes