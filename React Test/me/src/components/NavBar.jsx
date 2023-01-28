import React from 'react'
import {Link} from 'react-router-dom'
import {GiFullPizza} from 'react-icons/gi'
import '../styles/navbar.css'
const NavBar = () => {
  return (
    <div className='w-full px-20 py-4 fixed flex items-center   justify-between bg-black text-white  font-bold text-xl'>
      <Link to='/home'><GiFullPizza style={{width:'25px',height:'25px'}} className='cursor-pointer hover:fill-red-400'/></Link> 
      <div className='flex flex-row gap-7 items-center capitalize'>
        <Link to='/home'className='hover:text-green-800 s1 outline outline-2 outline-gray'>home</Link>
        <Link to='/menu'className='hover:text-green-800 s1'>menu</Link>
        <Link to='/about'className='hover:text-green-800 s1'>about</Link>
        <Link to='/contact'className='hover:text-green-800'>contact</Link>
      </div>
    </div>
  )
}

export default NavBar