
import React from 'react'
import MonitorCard from './MonitorCard'
import './Secondcss.css'
export default function SecondCard(props) {
  return (
    <>
    <div className="Boss2" style={{border:"2px solid blue", marginTop:'20px'}}>
      <h3>2-Card</h3>
      <div className="wave-group">
      <input type="text" placeholder='Write Your Word !!!' onChange={(e)=>{props.setCount(e.target.value)}} className='input'/>
      <span className="bar"></span>
      <label className="label">
      <span className="label-char" >N</span>
      <span className="label-char" >a</span>
      <span className="label-char" >m</span>
      <span className="label-char" >e</span>
        </label>
      </div>
      <MonitorCard setCount = {props.setCount} count={props.count}/>
    </div>
    </>
  )
}

