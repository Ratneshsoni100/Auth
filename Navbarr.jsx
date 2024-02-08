import React from 'react'
import { NavLink } from 'react-router-dom'
import {userauth} from '../Context/Context'

function Navbarr() {
  let users=userauth()
  let {data}=users
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {
           data.isLoggedIn ?
           ''
           :
           <li className="nav-item">
           <NavLink to = '/'
           className='m-2 fs-3 fw-bold text-decoration-none text-danger'
           >Login</NavLink>
          </li>
        }
        

        {
          data.isLoggedIn ?
          <li className="nav-item">
          <NavLink to = '/Profile'
          className='m-2 fs-3 fw-bold text-decoration-none text-danger'
          >Profile</NavLink>
         </li>
         :
         ''
        }
       
        
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbarr
