import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Update = (props) => {


    const {id,fname, lname, email} =props

    const [credentials, setCredentials] = useState({ firstname:fname, lastname:lname, email: email});
    const navigate = useNavigate()

  
    
    const handleSubmit = async (e) => {

        console.log(credentials)
        e.preventDefault()
        const {firstname,lastname,email} = credentials;

        const response = await fetch(`http://localhost:5000/api/auth/updateuser/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({ firstname, lastname, email })// body data type must match "Content-Type" header
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            alert('Information updated!!')
            navigate('/login')
        }
        else {
            alert("Internal server error")
        }
    }
    
    const onChange = (e) => {
        
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        //  setCredentials({ firstname:fname, lastname: lname, email: email })
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit your information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder={fname} value={credentials.fname} name="firstname" id="fname" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder={lname} value={credentials.lastname} name="lastname" id="lname" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder={email} name="email" value={credentials.email} id="exampleInputEmail1" onChange={onChange} required />
                                </div>

                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update
