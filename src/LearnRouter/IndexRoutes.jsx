import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routerz, { router } from './ListRoutes'
export default function IndexRoutes() {
  return (
    // <div>IndexRoutes</div>
    // agak laen emang di tarok di sini tapii, soalnya lagi riset gw sir aoakwoaw , make navbar di main dibawah elemnt nav ada router aowkaw 
    // bejor
    <RouterProvider router={router} />
  )
}
