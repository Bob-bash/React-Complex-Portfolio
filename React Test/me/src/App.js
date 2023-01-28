import React from 'react'
import './App.css'
import {AnimateRoutes,NavBar} from './components'
const App=()=>{
    return (
        <div className='flex flex-col items-center'>
            <NavBar/>
            <AnimateRoutes/>
        </div>
    )
}
export default App