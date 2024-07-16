// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import First from './Component/firstCard'
import './App.css'

function App() {
  let [count, setCount] = useState('')
  return (
    <>
    <First setCount = {setCount} count={count}/>
    </>
  )
}

export default App
