import React from 'react'
import './check.css'
import {useSelector,useDispatch} from 'react-redux'
import { Checkbox } from '../components'
function Check() {
    const dispatch=useDispatch()
    const items=useSelector(state=>state.items)
    const totals=useSelector(state=>state.totals)
    console.log(totals);
  return (
    <div className='check'>
      <div className="check__header">
        {items.length||totals!=0?(
        <>
          <h1 className='check__h1'>What you selected experiences lists showing now.</h1>
          <h3 className='check__total'>Total: {totals.reduce((pre,cur)=>pre+cur)} projects</h3>
        </>
        ):<h1 className='check__h1'>Nothing to show!</h1>}
        
      </div>
        <div className="checkw">
            {items.map((item,index)=>(
                <Checkbox
                backcolor={item.backcolor}
                des={item.des}
                icon={item.icon}
                t={item.t}
                key={index}
                handleclick={e=>{
                  dispatch({type:'ITEMS1',id:index})
                  dispatch({type:'TOTALS1',id:index})
                  console.log(items);
                }}
                />
            ))}
        </div>
    </div>
  )
}

export default Check