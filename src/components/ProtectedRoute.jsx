// import { Navigate } from "react-router-dom";

// export const ProtectedRoute = ({children, user}) => {
//     return user ? children : <Navigate  to="register"></Navigate>
// }

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