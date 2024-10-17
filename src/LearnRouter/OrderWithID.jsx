import React from 'react'
import { useParams } from 'react-router-dom'
// kelass !! pada saat gempuran context aku memkai useparams react dom 
// useid udah ga kompeten malesin 
export default function OrderWithID() {
    const id = useParams("id")
    console.log(id.id)
  return (
    <div>OrderWithID</div>
  )
}
