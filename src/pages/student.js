import { useNavigate} from "react-router-dom";
// RedirectedComponent.js
import {React,useState} from 'react';
import img1 from "../Gallary/logo.png";
function RedirectedComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change to false initially
  const navigate= useNavigate();
   
  const handleLogout =() => {
    // Clear the user's authentication state
     setIsLoggedIn(false);
     navigate("/");
     alert("logout")
  };
  return (
    <div>
      <nav style={styles.navbar}>
      <div style={styles.container}>
        <a href="/" style={styles.logo} ><img src={img1} alt="Brand" style={{float:"right", width:"70px",height:"50px",marginTop:"1px"}}/></a> 

        <ul style={styles.navList}>
          <li style={styles.navItem}>
          {isLoggedIn ? (
        <div>
        
          <button onClick={handleLogout} style={styles.navLink}>Logout</button>
        </div>
      ) : (
        <div></div>
      )}
          </li>
        </ul>
      </div>
    </nav>
    
    
    </div>
    
  );
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
/*<li style={styles.navItem}>
          <Link to="/attendence" style={styles.navLink}>ATTENDENCE</Link>
          </li>*/

export default RedirectedComponent;