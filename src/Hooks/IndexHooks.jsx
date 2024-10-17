import React from 'react'
import UstateUeffect from './UstateUeffect'
import { Usecallback, Usecallback2 } from './Usecallback'
import { UseContextt,UseContextProv } from './UseContextt'
import { Link } from 'react-router-dom'

export default function IndexHooks() {
  const sharedata = "shared data in 200 ok"
  return (
    <div>
        <ul>
      <li><Link to={"/"}>Home</Link></li>
       <li><Link to={"/learn-component"}>Component</Link></li>
      <li><Link to={"/learn-rendering"}>Render</Link></li>
    </ul>
      <h1>Usestate dan useeffect </h1>
        <UstateUeffect />
        <hr />
        <h1>Usecallback</h1>
        <Usecallback />
    <Usecallback2 />
    <hr />
      <h1>UseContext</h1>
      <UseContextProv.Provider value={sharedata}>
        <UseContextt />
      </UseContextProv.Provider >
      <h1>testing in out area element provider</h1>
      <UseContextt />
  <hr />
    </div>
  )
}
