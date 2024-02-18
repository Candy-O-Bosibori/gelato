import React from 'react'
import { SiteData } from './SiteWrapper'
import { Navigate, useNavigate } from 'react-router-dom'


function SignOut() {
    const {logOut} = SiteData()
    const navigate = useNavigate()
 
const handleLogOut = async () => {
    try{
await logOut()
navigate("/")
alert("Do you what to log out?")
    }catch(e){
        console.log(e.messege)
    }
}

  return (
    <div className='bg-babypink dark:bg-bpdm p-3 flex justify-center text-center'>
      <button  onClick={handleLogOut} className='py-2 px-4 text-bold bg-darkcherry text-white rounded'>
        Sign Out
      </button>
    </div>
  )
}

export default SignOut
