import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";

const Login = () => {
    const navigation=useNavigate()
    const [credentials,setCredentials]=useState({email:"",password:""});

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email:credentials.email, password:credentials.password })// body data type must match "Content-Type" header
          });
          const json=await response.json()
        //   console.log(json);
          if (json.success){
            alert('Successfull login!!')
            
            localStorage.setItem('token',json.authToken)
            localStorage.setItem('id',json.data.user.id)
            
            console.log(localStorage.getItem('token'),"login-----------")
            navigation("/")
          }
          else{
            alert(json.error)
          }
    }

    const onchange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className='container'>
            <h2>Enter credentials to login</h2>
            <form action="/" onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onchange} name='email' id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onchange} name='password' id="password"/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
