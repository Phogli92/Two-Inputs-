// eslint-disable-next-line no-unused-vars
import React from 'react'
import Second from './SecondCard'
import "./Secondcss.css"
export default function firstCard(props) {
  return (
    <>
    <div className="Boss" style={{border:"2px solid red"}}>
      <h3>1-card</h3>
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
      <Second setCount = {props.setCount} count={props.count}/>
    </div>
    </>
  )
}
