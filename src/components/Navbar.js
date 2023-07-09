import React,{useState} from 'react'
import { Link } from "react-router-dom"
import Update from './Update'
const Navbar = () => {

    const [user,setUser]=useState("")

    //    getuser
    const user_id = localStorage.getItem('id')
    const getUser = async () => {

        //    getuser
        const user_token = localStorage.getItem('token')
        console.log(user_token, "-----------get User-------")
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
            // body: JSON.stringify({firstname: email:credentials.email, password:credentials.password })// body data type must match "Content-Type" header
        });
        const json = await response.json()
        setUser(json.user)
        console.log(json.user, "get user---------------------");

        // const user = json.user

        if (json.success) {
            setUser(json.user)
         }
        else {
            alert(json.error)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Sylver Assignment </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                            
                                <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                            </li>
                            {user_id && <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/update" onClick={getUser}>Update</Link> */}
                                <Link type="button" className="nav-link" data-bs-toggle="modal" onClick={getUser} data-bs-target="#exampleModal">
                                    Update
                                </Link>

                                <Update id={user._id} fname={user.firstname} lname={user.lastname} email={user.email}/>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
