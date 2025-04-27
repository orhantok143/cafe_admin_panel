import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Outlet/>
    </div>
  )
}

export default Auth
