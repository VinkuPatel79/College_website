import React from "react";
import { useNavigate} from "react-router-dom";
import img1 from "../Gallary/logo.png";
import Footer from "./footer";
import "../gpcss/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';// Import Bootstrap JavaScript (popper.js and bootstrap.js)
import { FiPhone } from 'react-icons/fi';
import { FaEnvelope,FaGithub,FaInstagram,FaTwitter/*,FaPinterest*/,FaFacebook,FaYoutube } from 'react-icons/fa';
import  image1  from "../Gallary/home/adminpic.png"
import  image2  from "../Gallary/home/teacherpic.png"
import  image3  from "../Gallary/home/studentpic.png"

function HOME()
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
                  <div className="dropdown-content">
                  <button onClick={(e)=> adminclick()}>Admin..</button>
                  <button onClick={(e)=> teacherclick()}>Teacher</button>
                  <button onClick={(e)=> studentclick()}>Student</button>
                  
                  </div>
              </div>
          </li>
        </ul>
      </div>
    </nav>
   
    <br></br>
    <br></br>
        <div className="background-image">
        <h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1>
        </div>
        <br></br><br></br>
        <div className="row" style={{backgroundColor:'#fff',width:"1300px"}}>
            <div className="col-md-4">
                <div style={{border:"3px solid blue",height:"400px",width:"300px",marginLeft:"50px"}}>
                    <br></br>
                    <span style={{color:"black",border:"3px solid green",fontSize:"30px",marginLeft:"80px"}} > ADMIN </span>
                    <br></br>
                    <img src={ image1 } style={{height:"250px",width:"250px",border:"2px solid #000",marginLeft:"20px",marginTop:"10px"}} alt="admin"/>
                    <div>
                    <br></br><span>
                        <button type="submit" style={{marginLeft:"60px"}}>Sign Up</button>
                        <button type="submit" style={{marginLeft:"40px"}}>Log in</button>
                    </span></div>
                </div>
            </div>
            <div className="col-md-4">
                <div style={{border:"3px solid blue",height:"400px",width:"300px",marginLeft:"50px"}}>
                    <br></br>
                <span style={{color:"black",border:"3px solid green",fontSize:"30px",marginLeft:"80px"}} > TEACHER </span>
                    <br></br>
                    <img src={ image2 } style={{height:"250px",width:"250px",border:"2px solid #000",marginLeft:"20px",marginTop:"10px"}} alt="admin"/>
                    <div>
                    <br></br><span>
                        <button type="submit" style={{marginLeft:"60px"}}> Sign Up</button>
                        <button type="submit" style={{marginLeft:"40px"}}>Log in</button>
                    </span></div>
                </div>
            </div>
            <div className="col-md-3">
                <div style={{border:"3px solid blue",height:"400px",width:"300px",marginLeft:"50px"}}>
                    <br></br>
                <span style={{color:"black",border:"3px solid green",fontSize:"30px",marginLeft:"80px"}} > STUDENT </span>
                    <br></br>
                    <img src={ image3 } style={{height:"250px",width:"250px",border:"2px solid #000",marginLeft:"20px",marginTop:"10px"}} alt="admin"/>
                    <div>
                    <br></br><span>
                        <button type="submit" style={{marginLeft:"60px"}}>Sign Up</button>
                        <button type="submit" style={{marginLeft:"40px"}}>Log in</button>
                    </span></div>
                </div>
            </div>
        </div>
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
export default HOME;
/*<li style={styles.navItem}>
          <Link to="/attendence" style={styles.navLink}>ATTENDENCE</Link>
          </li>*/