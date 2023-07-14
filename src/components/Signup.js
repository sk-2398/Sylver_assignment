import React, {useState} from 'react'
import {  useNavigate } from "react-router-dom";

const Signup = () => {
    const navigation=useNavigate()

    const [credentials,setCredentials]=useState({firstname:"",lastname:"",email:"",password:""});

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {firstname,lastname,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, email, password })// body data type must match "Content-Type" header
          });
          const json=await response.json()
          console.log(json);
          if (json.success){
            alert('Successfull Signup!!')
            setCredentials({firstname:"",lastname:"",email:"",password:""})
            navigation("/")
          }
          else{
            alert(json)
          }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Singup Here</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstname" id="fname"  onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastname" id="lname" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1"  onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" onChange={onChange}  required/>
                </div>
               
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
