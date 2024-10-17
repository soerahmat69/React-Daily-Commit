import React from 'react'
import { useParams } from 'react-router-dom'
// jadi ceritanya mau bikin route di dalam route ta[pi gagal ntahlah dah capekk gw, ]
export default function NestedRoute() {
    const idPar = useParams("idNes")
  return (
    <div>NestedRoutes</div>
  )
}
