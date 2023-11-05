import React ,{useState } from 'react';
//import './Signup2.css'
import Login2 from './Login2';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Signup2(){
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSignup=async(e)=>{
        e.preventDefault();

        try{
            await axios.post('http://localhost:5000/api/Signup2',{
                username,
                email,password
            });
            alert('User signed up Successfully.');
            setUsername('');
            setEmail('');
            setPassword('');
        }
        catch(error){
            console.error('Error signing up:',error);
            alert('An error occurred');
        }
    };
    return(
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {/* <h1>Sign Up</h1> */}
            <form onSubmit={handleSignup}>
                <div>
                <label>Username</label>
                <input type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>Email</label>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label>Password</label>
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                <br/>
                <button type="submit" className='btn btn-info'>Sign In</button>
                </div>
                {/* <div className="text-end mt-2">Already <a href='Login2'>Sign In</a></div> */}
                <BrowserRouter>
                <div className="text-end mt-2">Already <Link to='/Login2'>Sign In</Link></div>
                <Routes>
                <Route exact path='Login2' element={<Login2 />} />
                </Routes>
                </BrowserRouter>
            </form>
        </div>
        </div>
    
    );
}
export default Signup2