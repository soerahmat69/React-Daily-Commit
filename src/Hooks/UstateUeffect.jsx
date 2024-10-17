import React, { useEffect, useState } from 'react'

export default function UstateUeffect() {
    const [test,setTest] = useState(null)
    const handleB = ()=>setTest("a" + test)
    useEffect(()=>{
        console.log("render pertama")
    },[test])
    useEffect(()=>{
        console.log("render kedua")
    },[])

  return (
    <div>
        <button onClick={handleB}>test</button>
    </div>
  )
}
