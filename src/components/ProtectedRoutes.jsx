import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoutes = () => {

  let name = localStorage.getItem('name')


  if(name) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes
