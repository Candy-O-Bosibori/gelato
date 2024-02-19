

import React from 'react'
import { Navigate } from "react-router-dom";
import { SiteData } from './SiteWrapper';

function ProtectedRoute({children}) {
    const {user} = SiteData()
if (!user){
    return <Navigate to="/"/>
}

  return (
    children
  )
}


export default ProtectedRoute