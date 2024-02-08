import React from 'react'
import { userauth } from '../Context/Context'
import { Navigate, useLocation } from 'react-router-dom'

function Protectedroutes({children}) {
    // let location =useLocation()
    let auth=userauth()
    if(!auth.data.userData){
return<Navigate to ='/'/>
    }
  return children
 

}

export default Protectedroutes
