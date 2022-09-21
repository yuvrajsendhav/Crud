import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
const GetRegistered = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:5555/get/data')
        .then(res=>setData(res.data))
        .catch(err=>setData(err));
    },[]);

    if(!data) return null;

    return (
        <div>
            <table border={1}>
                <tr>
                    <th>ID</th><th>Name</th><th>Email</th><th>Mobile</th><th>Password</th><th>Confirm Password</th><th>Edit</th><th>Delete</th>
                </tr>
                {
                data.map((result,i)=><tr key={i}><td>{result._id}</td><td>{result.name}</td><td>{result.email}</td><td>{result.mobile}</td><td>{result.password}</td><td>{result.cpassword}</td><td><Link to="/EditRegistration" state={result._id}>Edit</Link></td><td><Link to="/DeleteRegistered" state={result._id}>Delete</Link></td></tr>)}
            </table>
        </div>
    );
};

export default GetRegistered;