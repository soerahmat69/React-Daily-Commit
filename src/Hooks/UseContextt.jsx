import React, { createContext, useContext } from 'react'

export const UseContextProv = createContext("aku lum update")

export const UseContextt = () => {
  const UsecontextProved = useContext(UseContextProv)
    return (
    <div>i catch data via usecontext {UsecontextProved}</div>
  )
}

 