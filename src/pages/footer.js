import React from "react";
import  "../gpcss/footer.css";
import { FaMapMarker } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { FaEnvelope,FaInstagram,FaTwitter,FaLinkedin,FaFacebook,FaYoutube } from 'react-icons/fa';
function Footer() {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-column">
        <h3>ABOUT UNIVERSITY</h3>
        <div style={{borderColor: "#b3ddde",borderBottomWidth: "2px",width: "60px",marginTop: "28px",paddingRight:"5px",marginBottom: "28px",borderStyle: "solid"}}></div>
       <div style={{marginLeft:"3px"}}></div> Crafting a diverse menu of nourishing and affordable dishes to cater to the academic community at a university campus, ensuring a satisfying dining experience for students and staff.
      </div>
      <div className="footer-column" style={{marginLeft:"10px",paddingRight:"00px",borderLeft:"2px solid white"}}>
        <h3 style={{marginLeft:"20px"}}>COURSE</h3>
        <div style={{borderColor: "#b3ddde",borderBottomWidth: "2px",width: "60px",marginLeft:"20px",marginTop: "28px",marginBottom: "28px",borderStyle: "solid",paddingLeft:"10px"}}></div>
         
         <div style={{marginLeft:"35px",paddingRight:"00px",marginRight:"00px"}}>Computer Engineering
        <br></br> Civil Engineering
        <br></br> Mechnical Engineering
        <br></br> Electrical Engineering
        </div>
      </div>
      <div className="footer-column" style={{marginLeft:"0px",borderLeft:"2px solid white",borderRight:"2px solid white"}}>
        <h3>LINKS</h3>
        <div style={{borderColor: "#b3ddde",borderBottomWidth: "2px",width: "60px",marginTop: "28px",marginBottom: "28px",borderStyle: "solid"}}></div>
        <div style={{marginLeft:"30px"}}>
            
                <a href="/" style={{textDecoration:"none",color:"white",fontSize:"15px"}}><span style={{fontSize:"19px",color:"#b3ddde"}}>&#187;</span> Home</a><br></br>
                <a href="/course" style={{textDecoration:"none",color:"white",fontSize:"15px"}} ><span style={{fontSize:"19px",color:"#b3ddde"}}>&#187;</span>  Course</a><br></br>
                <a href="/contact" style={{textDecoration:"none",color:"white",fontSize:"15px"}}><span style={{fontSize:"19px",color:"#b3ddde"}}>&#187;</span>  Contact</a><br></br>
                <a href="/about" style={{textDecoration:"none",color:"white",fontSize:"15px"}}><span style={{fontSize:"19px",color:"#b3ddde"}}>&#187;</span>  About</a>
           
        </div>
        
      </div>
      <div className="footer-column" style={{marginLeft:"0px",borderLeft:"2px solid white"}}>
        <h3>GET IN TOUCH</h3>
        <div style={{borderColor: "#b3ddde",borderBottomWidth: "2px",width: "60px",marginTop: "28px",marginBottom: "28px",borderStyle: "solid"}}></div>
        <div style={{marginLeft:"3px"}}>
            <div ><FiPhone size={25} color="#b3ddde"/>
                <span color="#b3ddde"> Phone: +123 456 789 </span>
            </div><br></br>
            <div><FaEnvelope  size={25} color="#b3ddde" />
                <span style={{textDecoration:"none"}}>  Email: example@example.com</span>
            </div><br></br>
            <div><FaMapMarker size={25} color="#b3ddde" />
                <span style={{textDecoration:"none"}}>  1005 Via Merano Santa Barbara <br></br>    Ahmedabad Bapunagar</span>
            </div>
        </div>
      </div>  
    </footer>
    <div style={{backgroundColor:"#3e4246",height:"55px",paddingTop:"12px"}}>
    <div>
      <span style={{color:"#b5afaf",fontSize:"12px",marginLeft:"2px"}}>© 2023 University Media. All rights reserved
        <a  href="#" style={{textAlign:"center",textDecoration:"none",color:"#aab9c4",marginLeft:"400px"}}> privacy policy</a>
        <a href="https://www.instagram.com/" style={{textDecoration: 'none',color:"#b5afaf",marginLeft:"410px"}}><FaInstagram   /></a>
        <a href="https://twitter.com/" style={{textDecoration: 'none',color:"#b5afaf",marginLeft:"20px"}}><FaTwitter /></a>
        <a href="https://www.linkdin.com/" style={{textDecoration: 'none',color:"#b5afaf",marginLeft:"20px"}}><FaLinkedin/></a>
        <a href="https://www.facebook.com/" style={{textDecoration: 'none',color:"#b5afaf",marginLeft:"20px"}}><FaFacebook/></a>
        <a href="https://www.youtube.com/" style={{textDecoration: 'none',color:"#b5afaf",marginLeft:"20px"}}><FaYoutube  /></a>
      </span>
    </div>
</div>
</>
  );
}

export default Footer;
