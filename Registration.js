import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setCpassword]=useState("")

    const Register=()=>{
    axios.post(`http://127.0.0.1:5555/post/data`,{name,email,mobile,password,cpassword})
    .then(alert("Registration Success"))
    .catch(err=>err.send('Registration Failed'))
}
    return (
        <div>
            <form>
                Name: <input type="text" name="name" onChange={e=>setName(e.target.value)} placeholder='Enter Your Name' /><br></br><br></br>
                Email: <input type="text" name="email" onChange={e=>setEmail(e.target.value)} placeholder='Enter Your Email' /><br></br><br></br>
                Mobile: <input type="tel" name="mobile" onChange={e=>setMobile(e.target.value)} pattern='[0-9]{10}' placeholder='Enter Your Mobile' /><br></br><br></br>
                Password: <input type="password" name="password" onChange={e=>setPassword(e.target.value)} placeholder='Enter Password' /><br></br><br></br>
                Confirm Password: <input type="password" name="cpassword" onChange={e=>setCpassword(e.target.value)} placeholder='Confirm Password' /><br></br><br></br>
                <button type="submit" onClick={Register}>Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
};

export default Registration;