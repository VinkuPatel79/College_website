import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
// RedirectedComponent.js

import img1 from "../Gallary/logo.png";
function RedirectedComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change to false initially
  const navigate= useNavigate();
  const[formdata,setformdata]=useState({});
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpass] = useState('');
  const [phone, setphone] = useState('');
  const [gender,setgender] =useState("");
  const [city,setcity]=useState("");
  const [vistf,setvisstf ]=useState(false)
  const handleSignup = async (e) => {
    e.preventDefault();
    alert(formdata.fname)
    await setUsername(formdata.fname);
    await setemail(formdata.eid);
    await setgender(formdata.gender);
    await setpass(formdata.password);
    await setphone(formdata.phone);
    await setcity(formdata.city);
    
    alert(username);
    
    try {
      
      await axios.post('http://localhost:4300/api/Signupa',{
                username,
                email,password
            });
    
      
     }
 catch (error) {
      console.error('Error signing up:', error);
     alert('An error occurred.');
    }
  };
  const handleLogout =() => {
    // Clear the user's authentication state
     setIsLoggedIn(false);
     navigate("/");
     alert("logout")
  };
  function handlechange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setformdata({...formdata, [name]: value});
    }
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
    <h1>Sign Up</h1>

    <div>
      <button >Add Teacher </button>
    </div>
    <div>
      <form onSubmit={handleSignup} method="post">
      Name:  <input  type="text"  placeholder="Username"  value={username} onChange={ handlechange} />
      <label>First Name:</label><input type="text" name="fname" onChange={handlechange} /><br/>
 <label>Email Id:</label><input type="email" name="eid" onChange={handlechange} /><br/>
 <label>Password:</label><input type="text" name="password" onChange={handlechange} required/><br/>
 <label>Phone number : </label><textarea name="phone" onChange={handlechange} /><br/>
 <select onChange={handlechange} name='city'>
 <option value="Ahmedabad">Ahmedabad</option>
 <option value="Rajkot">Rajkot</option>
 </select>
 gender<input type="radio" name="gender" value="Male" onChange={handlechange} />Male
 <input type="radio" name="gender" value="Female" onChange={handlechange}/>Female
 
 
        <button type="submit">ADD</button>
      </form>
      </div>
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