import React,{ useEffect } from 'react'
import { useRef,useState } from 'react'

export function Reff() {
    const reffHook = useRef(0)
    const handle=()=>{
     reffHook.current++
     console.log(reffHook.current)
    }

  return (
    <>
    <button className='ring-1 ring-black' onClick={()=> handle()} type="submit">PENCED AKUU</button>
    {/* <h1>1{reffHook.current}</h1> */}
    </>)
}


 function ReffState() {
    const [count,setCount] = useState(0)
  return (
    <div>reff</div>
  )
}
