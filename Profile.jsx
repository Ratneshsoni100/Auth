import React from 'react'
import { userauth } from '../Context/Context'
import { useNavigate } from 'react-router-dom'




function Profile() {
  let navigate = useNavigate()

  let users = userauth()
  console.log(users)

  let { data, logout } = users

  let onlogoutclick = () => {
    logout()
    navigate('/')

  }
  return (
    <div>
      Profile
      <hr />

      {
        data.isLoggedIn === false ?
          <h1>User not logged in </h1>
          :

          <div>
            <h2 className='bg-info w-50 '>Welcome username </h2>

            <button
              onClick={onlogoutclick}
              className='btn btn-warning'> logout</button>

          </div>
      }


    </div>
  )
}

export default Profile
