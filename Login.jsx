import React, { useState } from 'react'

import {userauth} from '../Context/Context'
import { useNavigate } from 'react-router-dom'

function Login() {
   
    let [logindata,setdata]=useState({
        myname:'varun',myemail:'varun@gmail.com',mypass:'varunpass'
        
    })
    let handchange=(eve)=>{
        setdata(
            {...logindata,[eve.target.name]:eve.target.value}
        )
       
    }
    let navigate =useNavigate()

    let users=userauth()
    let {data,setData}=users
   

    let handychange=(ev)=>{
     ev.preventDefault()
     console.log(logindata)

     setData(
        {...data,isLoggedIn:true,userData:logindata}
    )
      navigate('/profile')
    }
    return (
        <>
        <form onSubmit={handychange}>
            <label className="form-label">User Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name='myname'
            value={logindata.myname}
            onChange={handchange}/>

            <label  className="form-label">Email address</label>
            <input inputtype="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name='myemail'
            value={logindata.myemail}
            onChange={handchange}/>

            <label  className="form-label">Passward</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name='nypass'
            value={logindata.mypass}
            onChange={handchange}/>
            

            <button type='submit' className='btn btn-success d-block m-auto mt-3 w-75'>SUBMIT</button>
            </form>
   
        </>
      )  
}

export default Login
