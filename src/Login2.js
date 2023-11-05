import React ,{useState } from 'react';
import axios from 'axios';
//import './Login2.css'
function Login2(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    
    const handleLogin=async(e)=>{
        e.preventDefault();

        try{
            await axios.post('http://localhost:5000/api/Login2',{
                username,
                password
            });
            alert('Login Successfull.');
            setUsername('');
            setPassword('');

        }
        catch(error){
            console.error('Error logging in:',error);
            alert('Login Failed');
        }
    };
    return(
        <div className="app">
          <div className="login-form">
            <div className="title">Login</div>
            {/* <h1>Login</h1> */}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>Password</label>
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br/>
                <div>
                <button type="submit" className='btn btn-info'>Login</button>
                </div>
            </form>
        </div>
        </div>
    
    );
}
export default Login2