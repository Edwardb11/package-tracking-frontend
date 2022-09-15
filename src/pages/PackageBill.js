import React from 'react'
import { useParams } from 'react-router-dom'

const PackageBill = () => {
    const {id} = useParams()
  return (
    <div>PackageBill {id}</div>
  )
}

export default PackageBill