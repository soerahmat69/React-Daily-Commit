import React, { useEffect, useReducer, useState } from 'react'



export default function UseReducers() {
    
const reducer =(state,action)=>{
    switch (action.type) {
        case 'velu':
            return console.log("200 ok")
            
    
        default:
            return console.log("error")
            
    }
}
const [state,dispatch] = useReducer(reducer,{ntah:"saya berhasil  200 ok"})
const [data,setData] = useState(null)

useEffect(()=>{

},[state])


  return (
    <>
        <button onClick={()=>dispatch()}></button>
        <div>UseReducers</div>
    </>
  )
}
