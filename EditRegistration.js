import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation} from 'react-router-dom';
const EditRegistration = () => {
    let data1 =useLocation();
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
    const[data,setData]=useState([]);

     useEffect=(()=>{
        axios.get(`http://127.0.0.1:5555/get/data/${data1.state}`)
        .then(res=>setData(res.data))
        .catch(err=>setData(err));
    },[])

    let EditUpdate=(()=>{
     axios.put(`http://127.0.0.1:5555/update/${data1.state}`,{name,email,mobile})
        .then(alert("Data Updation Success"))
        .catch(err=>setData(err));
    });
    return (
        <div>
            <form>
                Name: <input type="text" name="name" onChange={e=>setName(e.target.value)} placeholder='Enter Your Name' /><br></br><br></br>
                Email: <input type="text" name="email" onChange={e=>setEmail(e.target.value)} placeholder='Enter Your Email' /><br></br><br></br>
                Mobile: <input type="tel" name="mobile" onChange={e=>setMobile(e.target.value)} pattern='[0-9]{10}' placeholder='Enter Your Mobile' /><br></br><br></br>
                {/* Password: <input type="password" name="password" onChange={e=>setPassword(e.target.value)} placeholder='Enter Password' /><br></br><br></br>
                Confirm Password: <input type="cpassword" name="password" onChange={e=>setCpassword(e.target.value)} placeholder='Confirm Password' /><br></br><br></br> */}
                <button type="submit" value="submit" onClick={EditUpdate}>Submit</button>
                <button type="reset">Reset</button>
            </form>
            {data1.state}
        </div>
    );
};

export default EditRegistration;