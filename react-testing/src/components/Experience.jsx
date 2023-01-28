import React,{useState} from 'react'
import './experience.css'
import {HiDesktopComputer} from 'react-icons/hi'
import {RxMobile} from 'react-icons/rx'
import {Exper} from '../coms'
import {TbCircles} from   'react-icons/tb'
import {useDispatch,useSelector} from 'react-redux'
function Experience() {
  const dispatch=useDispatch()
  const items=useSelector(state=>state.items)
  const experience=[
    {backcolor:'#287375',icon:<HiDesktopComputer/>,t:'Website Design',des:'76 Projects'},
    {backcolor:'#f6c54c',icon:<RxMobile/>,t:'Mobile APP Design',des:'63 Projects'},
    {backcolor:'#d5673b',icon:<TbCircles/>,t:'Brand Identity',des:'47 Projects'},
  ]
  const [con, setCon] = useState([]);
  return (
    <div className='experience' id='experience'>
      <div className='experience__l'>
        {experience.map((item,index)=>(
          <Exper 
          backcolor={item.backcolor}
          icon={item.icon}
          t={item.t}
          des={item.des}
          key={index}
          handleclick={e=>{
            dispatch({type:'ITEMS',item:item})
            // dispatch({type:'TOTALS',total:item.des})
            dispatch({type:'TOTALS',total:Number.parseInt(item.des)})
          }}
          />
        ))}
      </div>

      <div className='experience__r'>
          <h1>What do I help?</h1>
          <p>I will you with finging a solution and solve your  
          problem,We use process desigin to create digital
          products.Besides that also help their business.            
          </p>
          <br/><br/>
          <p>We use process design to create digital products.
            Besides that also help their business
          </p>
          <div className='experience__r__b'>
            <div className='experience__r__bw'>
              <h1>285+</h1>
              <span>Project Completed</span>
            </div>
            <div className='experience__r__bw'>
              <h1>190+</h1>
              <span>Happy Clients</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Experience