import React from "react";
import { useNavigate} from "react-router-dom";
import img1 from "../Gallary/logo.png";
import Footer from "./footer";
import "../gpcss/about.css"
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';// Import Bootstrap JavaScript (popper.js and bootstrap.js)
import { FiPhone } from 'react-icons/fi';
import { FaEnvelope,FaGithub,FaInstagram,FaTwitter/*,FaPinterest*/,FaFacebook,FaYoutube } from 'react-icons/fa';
import { FaGraduationCap,FaTrophy, FaChalkboardTeacher, FaUniversity   } from 'react-icons/fa';
function ABOUT()
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
    <br></br>
        <div className="backimg">
        <div className="background-overlay" style={{paddingTop:"100px"}}>
            <div style={{color:"white",fontSize:"30px",textAlign:"center"}}>
                ABOUT
            </div>
            <br></br>
            <span style={{color:"white" ,marginTop:'300px'}}>
                <a href="/" style={{textDecoration:"none",color:"white",marginLeft:"575px",fontSize:"25px"}}>Home</a>
                <a href="/about" style={{textDecoration:"none",color:"white",fontSize:"25px"}}>  &#187; About</a>
            </span>
        </div>
        </div>
        <br></br><br></br>
        <div>
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-md-6">
                    <h2 style={{color:"#223d50"}}>We Are The Top Learning Platform</h2><br></br>
                    <p>
                    Universities are exceptional institutions that foster intellectual growth and innovation. Their dedication to research and education empowers individuals to explore their passions, pushing the boundaries of human knowledge and creating a brighter future for all.
                    </p>
                    <p>
                    Universities serve as hubs of diversity, bringing together people from various backgrounds and cultures. They provide an invaluable platform for students to develop critical thinking skills, broaden their horizons, and prepare for meaningful contributions to society.
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="backcs">
                        <div className="backcs2"></div>
                        <div className="backcs3"></div>
                    </div>
                </div>

            </div>
        </div>
        <br></br><br></br>
        <div>
            <div className="row" style={{backgroundColor:"rgb(35, 35, 163)",width:"1310px"}}>
                <div className="col-md-3">
                    <div>
                    <FaGraduationCap size={64} color="white" style={{marginLeft:"130px"}}/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <FaTrophy size={64} color="white" style={{marginLeft:"100px"}}/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                    <FaUniversity size={64} color="white" style={{marginLeft:"100px"}}/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                    <FaChalkboardTeacher size={64} color="white" style={{marginLeft:"90px"}}/>
                    </div>
                </div>
            </div>
        </div>
        <br></br><br></br>
        

        
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
export default ABOUT;
/*<li style={styles.navItem}>
          <Link to="/attendence" style={styles.navLink}>ATTENDENCE</Link>
          </li>*/