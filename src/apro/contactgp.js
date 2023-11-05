import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';// Import Bootstrap JavaScript (popper.js and bootstrap.js)
import { FaMapMarker } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';
import "./contact.css"
//fontFamily:"Arial, Helvetica, sans-serif",,
function Contact()
{
    const [fd,setfd]=useState({});
    function handlechange(e)
    {
         const name=e.target.name;
         const value=e.target.value;
        setfd({...fd,[name]:value})
    }
    
    function handleSubmit(e)
    {
        e.preventDefault();
        alert("success"+fd.fna+fd.lna+fd.eml+fd.text)
    }
    return(
      <>
      <br></br>
      <div className="background-about-image" style={{width:1290,height:185,boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",}}>
            <h1> .</h1>
            <h1 style={{color:"white",fontFamily:"serif",textAlign:"center"}}> Contact</h1>
      </div>
      <br></br><br></br>
      <div>
        <div className="container" style={{marginLeft:"0px"}}>
          <div  className="row" style={{width:"1270px",marginLeft:"0px"}}>
            <div className="col-md-6">
                <span style={{fontFamily:"serif",fontSize:"40px",marginLeft:"90px"}}>Contact Us</span>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-5">
                <span style={{fontFamily:"serif",fontSize:"40px",marginLeft:"30px"}}>Get In Touch</span>
            </div>
            </div>
            <br></br>
          <div  className="row">
            <div className="col-md-6">
                    <form  onSubmit={handleSubmit} style={{marginLeft:"50px"}}>   
                        <label className="row"> <span className="col-md-4" style={{color:"#575757"}}>First Name*</span><input type="text" name='fna' onChange={handlechange} className="col-md-8 feild" required/>  </label> <br></br>
                        <label className="row"><span className="col-md-4" style={{color:"#575757"}}> Last Name*</span><input type="text" name='lna' onChange={handlechange} className="col-md-8 feild" required/>  </label><br></br>
                        <label className="row"> <span className="col-md-4"  style={{color:"#575757"}}>Email*</span> <input type='email' name='eml' onChange={handlechange} className="col-md-8 feild" required/></label><br></br>
                        <label className="row"><span className="col-md-4" style={{color:"#575757"}}>  How can we help?* </span> <textarea name="text" onChange={handlechange} className="col-md-8 feild" required></textarea></label> <br></br>
                        <button type="submit">Get in Touch</button> <br/>
                    </form>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-5">
                <p style={{marginLeft:"30px"}}>
                    <FaMapMarker size={25} color="#223d50" /> 1005 Via Merano Santa Barbara, CA 93111
                </p>
                <br></br>
                <p  style={{marginLeft:"30px"}}>
                    <FiPhone size={25} color="#223d50" /> Phone: +123 456 789
                </p>
                <br></br>
                <p  style={{marginLeft:"30px"}}>
                    <FaEnvelope  size={25} color="#223d50" /> Email: example@example.com
                </p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
export default  Contact;

