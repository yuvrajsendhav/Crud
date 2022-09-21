import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Deleteregistered = () => {
    let data1 = useLocation();
    const [data, setData]=useState([]);
    axios.delete(`http://127.0.0.1:5555/delete/${data1.state}`)
    .then(()=>{alert("Data Deleted")
    window.location='/GetRegistered'})
    .catch(err=>setData(err));

};

export default Deleteregistered;