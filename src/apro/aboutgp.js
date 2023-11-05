import React from "react";
import "./aboutgp.css"
import { FaGraduationCap,FaTrophy, FaChalkboardTeacher, FaUniversity   } from 'react-icons/fa';
function About()
{ 
    return(
        <>
        <br></br>
        <div className="">
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
        </>
    )
}
export default  About;
