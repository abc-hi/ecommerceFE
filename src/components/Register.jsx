


import React, { useState } from 'react';
import { useStateS } from 'react';
import axios from 'axios';

const Register = () => {
    const[name, setName]= useState('')
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const[confirmPassword, setConfirmPassword]= useState('')

    const[responseMsg, setResponseMsg]= useState('')
    


   
       const handleSubmit =async(e)=>{
        e.preventDefault()
        console.log('Form submitted with:',name,email,password,confirmPassword );

const payloads = {name,email,password,confirmPassword}
// http://localhost:4001/api/register
       axios.post("https://ecommercebe-h822.onrender.com/api/register",payloads)
       .then((res)=>setResponseMsg(res.data.message))
       .catch((err)=>

       console.log("error:", err.response || err.message))
    }
    return (
        <div className="mt-5"  style={{ backgroundColor: '#20c997',width: '100vw', margin: '0', padding: '0' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Add border, rounded corners, and padding */}
                    <div className="border p-4 rounded">
                    <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName"
                                    aria-describedby="nameHelp"
                                    onChange={(e)=>setName(e.target.value)} required


                                    
                                />
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e)=>setEmail(e.target.value)} required

                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e)=>{setPassword(e.target.value)}} required

                                />
                                <label htmlFor="exampleConfirmPassword1" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleConfirmPassword1"
                                    onChange={(e)=>{setConfirmPassword(e.target.value)}} required

                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    

                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary" >Submit</button>
                            <h1> {responseMsg} </h1>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

