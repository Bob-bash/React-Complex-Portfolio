import React,{useEffect} from 'react'
import './App.css'
import { Route,Routes, useNavigate } from 'react-router-dom'
import {Login,Home,Error, Check} from './pages'
function App() {
  const nav=useNavigate() 
  const handleoffline=e=>{
      nav('/error')
  }
  const handleonline=e=>{
      nav('/')
  }
  useEffect(() => {
    window.addEventListener('offline',handleoffline)
    window.addEventListener('online',handleonline)
    return () => {
    window.removeEventListener('offline',handleoffline)
    window.removeEventListener('online',handleonline)
    };
  }, [handleoffline]);
  return (
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='/check' element={<Check/>}/>
        </Routes>
      </div>
  )
}

export default App