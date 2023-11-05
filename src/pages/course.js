import React from "react";
import { useNavigate} from "react-router-dom";
import img1 from "../Gallary/logo.png";
import Footer from "./footer";
import "../gpcss/course.css"
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';// Import Bootstrap JavaScript (popper.js and bootstrap.js)
import { FiPhone } from 'react-icons/fi';
import { FaEnvelope,FaGithub,FaInstagram,FaTwitter/*,FaPinterest*/,FaFacebook,FaYoutube } from 'react-icons/fa';
const coursesData = [
    {
      id: 1,
      title: 'Bachelor of Science in Electrical Engineering',
      duration: '4 years',
      description: 'This program focuses on electrical engineering principles and applications.',
    },
    {
      id: 2,
      title: 'Bachelor of Science in Mechanical Engineering',
      duration: '4 years',
      description: 'This program covers the fundamentals of mechanical engineering.',
    },
    {
      id: 3,
      title: 'Bachelor of Science in Computer Science',
      duration: '4 years',
      description: 'This program provides a strong foundation in computer science and programming.',
    },
    // Add 10 more courses here
    {
      id: 4,
      title: 'Bachelor of Science in Civil Engineering',
      duration: '4 years',
      description: 'This program focuses on civil engineering principles and infrastructure.',
    },
    {
      id: 5,
      title: 'Bachelor of Science in Chemical Engineering',
      duration: '4 years',
      description: 'This program covers chemical engineering processes and applications.',
    },
    {
      id: 6,
      title: 'Bachelor of Science in Biomedical Engineering',
      duration: '4 years',
      description: 'This program combines engineering with biology and healthcare.',
    },
    {
      id: 7,
      title: 'Bachelor of Science in Aerospace Engineering',
      duration: '4 years',
      description: 'This program specializes in aerospace and aeronautical engineering.',
    },
    {
      id: 8,
      title: 'Bachelor of Science in Environmental Engineering',
      duration: '4 years',
      description: 'This program focuses on environmental sustainability and engineering solutions.',
    },
    {
      id: 9,
      title: 'Bachelor of Science in Software Engineering',
      duration: '4 years',
      description: 'This program specializes in software development and engineering practices.',
    },
    {
      id: 10,
      title: 'Bachelor of Science in Materials Science and Engineering',
      duration: '4 years',
      description: 'This program explores the properties and applications of materials.',
    },
    // Add 10 more courses here
    {
      id: 11,
      title: 'Bachelor of Science in Industrial Engineering',
      duration: '4 years',
      description: 'This program focuses on optimizing industrial processes and systems.',
    },
    {
      id: 12,
      title: 'Bachelor of Science in Bioengineering',
      duration: '4 years',
      description: 'This program combines engineering with biology and healthcare.',
    },
    {
      id: 13,
      title: 'Bachelor of Science in Robotics Engineering',
      duration: '4 years',
      description: 'This program specializes in robotics and automation technologies.',
    },
    {
      id: 14,
      title: 'Bachelor of Science in Petroleum Engineering',
      duration: '4 years',
      description: 'This program explores the extraction and processing of petroleum resources.',
    },
    {
      id: 15,
      title: 'Bachelor of Science in Nuclear Engineering',
      duration: '4 years',
      description: 'This program specializes in nuclear energy and radiation technologies.',
    },
    // Add 5 more courses here
    {
      id: 16,
      title: 'Bachelor of Science in Software Development',
      duration: '4 years',
      description: 'This program focuses on software development and programming languages.',
    },
    {
      id: 17,
      title: 'Bachelor of Science in Data Science',
      duration: '4 years',
      description: 'This program emphasizes data analysis and machine learning.',
    },
    {
      id: 18,
      title: 'Bachelor of Science in Civil Infrastructure Management',
      duration: '4 years',
      description: 'This program covers infrastructure planning and management.',
    },
    {
      id: 19,
      title: 'Bachelor of Science in Biotechnology',
      duration: '4 years',
      description: 'This program combines biology with engineering for biotech applications.',
    },
    {
      id: 20,
      title: 'Bachelor of Science in Aerospace Systems Engineering',
      duration: '4 years',
      description: 'This program focuses on aerospace systems and technology.',
    },
  ];
function Course()
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
    <div className="courses-page">
      <h1>Courses Offered</h1>
      <div className="course-list">
        {coursesData.map((course) => (
          <div className="course" key={course.id}>
            <h2>{course.title}</h2>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p>{course.description}</p>
          </div>
        ))}
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
export default Course;
/*<li style={styles.navItem}>
          <Link to="/attendence" style={styles.navLink}>ATTENDENCE</Link>
          </li>*/