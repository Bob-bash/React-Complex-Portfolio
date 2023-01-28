import React,{useEffect,useState} from 'react'
import {Services,Experience,Portfolio,Testimonials,Contact,Footer,Totop, Loading} from '../components'
import Header from './Header'
function Home() {
  const [loading, setLoading] = useState(true);
  const handletime1=()=>{
    setLoading(false)
  }
    useEffect(() => {
      const timer1=setTimeout(handletime1, 1500);
      return () => {
        clearTimeout(timer1)
      };
    }, [handletime1]);
  // const handleload=e=>{
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   window.addEventListener("load",handleload)
  //   return () => {
  //   window.removeEventListener("load",handleload)
  //   };
  // }, [handleload]);
  return loading?<Loading/>:
  (
    <div className='homew'>
            <Header/>
            <Services/>
            <Experience/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            <Totop/>
    </div>
  )
}
export default Home