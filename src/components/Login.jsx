import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
  

    const[responseMsg, setResponseMsg]= useState('')
    


   
       const handleSubmit =async(e)=>{
        e.preventDefault()
        console.log('Form submitted with:',email,password);

const payloads = {email,password}
// http://localhost:4001/api/login
       axios.post("http://localhost:4001/api/login",payloads)
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
                            </div>
                            <div className="mb-3 form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    id="exampleCheck1" 
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>                        {responseMsg && <p>{responseMsg}</p>}

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;