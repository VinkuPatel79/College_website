import React from "react";
import { useNavigate} from "react-router-dom";
import "../gpcss/contact.css";
import { FaMapMarker } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import img1 from "../Gallary/logo.png";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';// Import Bootstrap JavaScript (popper.js and bootstrap.js)
import { FaEnvelope,FaGithub,FaInstagram,FaTwitter/*,FaPinterest*/,FaFacebook,FaYoutube } from 'react-icons/fa';
import { useState } from "react";
function Contact()
{
    const navigate= useNavigate();
    function homeclick()
    {
        navigate("/");
    }
    function courseclick()
    {
        navigate("/course");
    }
    function aboutclick()
    {
        navigate("/about");
    }
    function contactclick()
    {
        navigate("/contact");
    }
    function adminclick()
    {
        navigate("/admin");
    }
    function teacherclick()
    {
        navigate("/teacher");
    }
    function studentclick()
    {
        navigate("/student");  
    }    
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
  return(<>
    
      <div style={styles.boxx}>
      <div className="container" >
                <div class="row" >        
                <div className="col-md-3" style={{marginTop:"10px"}}> <FaEnvelope  size={25}   /> Email: example@example.com</div>
                <div className="col-md-3" style={{marginTop:"10px"}}> <FiPhone size={25}  /> Phone: +123 456 789 </div> 
                    <div className="col-md-1" style={{marginTop:"10px"}}><a href="https://in.github.com/" style={{textDecoration: 'none',color:"white"}}><FaGithub  /></a></div>       
                    <div className="col-md-1" style={{marginTop:"10px"}}><a href="https://www.instagram.com/" style={{textDecoration: 'none',color:"white"}}><FaInstagram   /></a></div>
                    <div className="col-md-1" style={{marginTop:"10px"}}><a href="https://twitter.com/" style={{textDecoration: 'none',color:"white"}}><FaTwitter /></a></div> 
                    <div className="col-md-1" style={{marginTop:"10px"}}><a href="https://www.youtube.com/" style={{textDecoration: 'none',color:"white"}}><FaYoutube  /></a></div>
                    <div className="col-md-1" style={{marginTop:"10px"}}><a href="https://www.facebook.com/" style={{textDecoration: 'none',color:"white"}}><FaFacebook/></a></div>
            </div>
       </div>
      </div>
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <a href="/" style={styles.logo} ><img src={img1} alt="Brand" style={{float:"right", width:"70px",height:"50px",marginTop:"1px"}}/></a> 

        <ul style={styles.navList}>
          <li style={styles.navItem}>
          <button  style={styles.navLink} onClick={(e)=> homeclick()}>HOME</button>
          </li>
          <li style={styles.navItem}>
          <button  style={styles.navLink} onClick={(e)=> courseclick()}>COURSE</button>
          </li>
          
          <li style={styles.navItem}>
          <button  style={styles.navLink} onClick={(e)=> aboutclick()}>ABOUT</button>
          </li>
          <li style={styles.navItem}>
          <button  style={styles.navLink} onClick={(e)=> contactclick()}>CONTACT</button>
          </li>
          
          <li style={styles.navItem}>
              <div className="dropdown">
                <button style={styles.navLink}>LOGIN</button>
                  <div class="dropdown-content">
                  <button onClick={(e)=> adminclick()}> Admin</button>
                  <button onClick={(e)=> teacherclick()}> Teacher</button>
                  <button onClick={(e)=> studentclick()}> Student</button>
                  
                  </div>
              </div>
          </li>
        </ul>
      </div>
    </nav>
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

    <br></br>
    <br></br>
        
    <br></br>
    {<Footer/>}
    </>
  )
}

const styles = {
  boxx:{
    backgroundColor: "#223d50",
    color:"#fff",
    height:"50px"
  },
  navbar: {
    boxShadow: "5px 5px 10px rgba(0.5, 0.5, 0.5, 0.5)",
    //backgroundColor: "#223d50",
    backgroundColor:"#EcEcEc",
    color: '#fff',
    padding: '0px 0',
    marginLeft:"2px",
    marginTop:"7px",
    height:'65px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop:"0px",
    alignItems: 'center',
    maxWidth: '1200px',
    //margin: '0px  10px 10px 5px',
    //marginTop:"0px",
    padding: '0 20px',
  },
  logo: {
    //textDecoration: 'none',
    //fontSize: '24px',
    //color: '#fff',
    marginTop:"5px",
    marginLeft:"1px"
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    marginTop:"100 px",
    paddingTop:"17px"
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    textDecoration: 'none',
    fontFamily:"serif",
    color: '#223d50',
    fontSize: '16px',
    border: "none"
  }
};
export default Contact;
/*<li style={styles.navItem}>
          <Link to="/attendence" style={styles.navLink}>ATTENDENCE</Link>
          </li>*/