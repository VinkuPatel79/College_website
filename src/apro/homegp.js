import React from "react";
import "./homecss.css";
import  image1  from "./adminpic.png"
import  image2  from "./teacherpic.png"
import  image3  from "./studentpic.png"
/*import Login from "./login";{ <Login/>}*/
function Home()
{
    return(
        <>
        <br></br>
        <div className="background-image">
        <h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1><h1>HOME</h1>
        </div>
        <br></br><br></br>
        <div className="row" style={{backgroundColor:'#fff',width:"1300px"}}>
            <div className="col-md-4">
                <div style={{border:"3px solid blue",height:"400px",width:"300px",marginLeft:"50px"}}>
                    <br></br>
                    <span style={{color:"black",border:"3px solid green",fontSize:"30px",marginLeft:"80px"}} > ADMIN </span>
                    <br></br>
                    <img src={ image1 } style={{height:"250px",width:"250px",border:"2px solid #000",marginLeft:"20px",marginTop:"10px"}} alt="admin"/>
                    <div>
                    <br></br><span>
                        <button type="submit" style={{marginLeft:"60px"}}>Sign Up</button>
                        <button type="submit" style={{marginLeft:"40px"}}>Log in</button>
                    </span></div>
                </div>
            </div>
            <div className="col-md-4">
                <div style={{border:"3px solid blue",height:"400px",width:"300px",marginLeft:"50px"}}>
                    <br></br>
                <span style={{color:"black",border:"3px solid green",fontSize:"30px",marginLeft:"80px"}} > TEACHER </span>
                    <br></br>
                    <img src={ image2 } style={{height:"250px",width:"250px",border:"2px solid #000",marginLeft:"20px",marginTop:"10px"}} alt="admin"/>
                    <div>
                    <br></br><span>
                        <button type="submit" style={{marginLeft:"60px"}}> Sign Up</button>
                        <button type="submit" style={{marginLeft:"40px"}}>Log in</button>
                    </span></div>
                </div>
            </div>
            <div className="col-md-3">
                <div style={{border:"3px solid blue",height:"400px",width:"300px",marginLeft:"50px"}}>
                    <br></br>
                <span style={{color:"black",border:"3px solid green",fontSize:"30px",marginLeft:"80px"}} > STUDENT </span>
                    <br></br>
                    <img src={ image3 } style={{height:"250px",width:"250px",border:"2px solid #000",marginLeft:"20px",marginTop:"10px"}} alt="admin"/>
                    <div>
                    <br></br><span>
                        <button type="submit" style={{marginLeft:"60px"}}>Sign Up</button>
                        <button type="submit" style={{marginLeft:"40px"}}>Log in</button>
                    </span></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;

