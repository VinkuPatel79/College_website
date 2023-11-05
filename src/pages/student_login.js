import React ,{useState } from 'react';
import axios from 'axios';
import RedirectedComponent from './student';
import "../gpcss/login_form.css"
function Student(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginBox, setShowLoginBox] = useState(true);
    
    const handleLogin=async(e)=>{
        e.preventDefault();

        try{
            
            await axios.post('http://localhost:5000/api/Login2',{
                username,
                password,
                
            });
            alert('Login Successfull.');
            setUsername('');
            setPassword('');
            setIsLoggedIn(true);
            setShowLoginBox(false);
        }
        catch(error){
            console.error('Error logging in:',error);
            alert('Login Failed');
        }
    };
    return(
        <>
        <div className="app">
          <div className="login-form" style={{display: showLoginBox ? 'block' : 'none'}}>
            <div className="title">Login</div>
            {/* <h1>Login</h1> */}
            <div className = "container">
            <div className="wrapper">
            <form onSubmit={handleLogin} name="Login_Form" className="form-signin">
            <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
            <hr className="colorgraph"/><br></br>
            <input type="text" className="form-control" name="Username" placeholder="Username" required="" autofocus="" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            
            <input type="password" className="form-control" name="Password" placeholder="Password" required="" value={password} onChange={(e)=>setPassword(e.target.value)}/>          
            <div>
      {isLoggedIn ? (
        <RedirectedComponent />
      
        
        
      ) : (
        <div>

          {/* Login form goes here */}
          <button className='btn btn-lg btn-primary btn-block butn'value="Login" name="Submit" type="Submit" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
          
                <br/>
               
            </form>
            </div>
            </div>
        </div>
        </div>
       

        </>
    );
}
export default Student;