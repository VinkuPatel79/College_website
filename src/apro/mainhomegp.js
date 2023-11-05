import React from "react";
import  {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import Home from "./homegp";
import Course from "./coursegp";
import About from "./aboutgp";
import Contact from "./contactgp";
import NoPage from "./nopagegp";
import img1 from "./logop2.png";
import Footer from "./gpfootergp";
import Admin from "./admingp";
import Teacher from "./teachergp";
import Student from "./studentgp";
import "./mainhomegp.css"
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';// Import Bootstrap JavaScript (popper.js and bootstrap.js)
import { FiPhone } from 'react-icons/fi';
import { FaEnvelope,FaGithub,FaInstagram,FaTwitter/*,FaPinterest*/,FaFacebook,FaYoutube } from 'react-icons/fa';


function Nav()
{
  return(<>
    <Router>
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
          <Link to="/" style={styles.navLink}>HOME</Link>
          </li>
          <li style={styles.navItem}>
          <Link to="/course" style={styles.navLink}>COURSE</Link>
          </li>
          
          <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>ABOUT</Link>
          </li>
          <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>CONTACT</Link>
          </li>
          
          <li style={styles.navItem}>
              <div className="dropdown">
                <button style={styles.navLink}>LOGIN</button>
                  <div class="dropdown-content">
                  <Link to="/admingp"> Admin</Link>
                  <Link to="/teacher"> Teacher</Link>
                  <Link to="/student"> Student</Link>
                  
                  </div>
              </div>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/course" element={<Course/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          
          <Route path="/teacher" element={<Teacher/>}></Route>
          <Route path="/student" element={<Student/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
    </Routes>
    </Router>
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
export default Nav;
/*<li style={styles.navItem}>
          <Link to="/attendence" style={styles.navLink}>ATTENDENCE</Link>
          </li>*/