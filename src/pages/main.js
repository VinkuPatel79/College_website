import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './home';
import Contact from './contact';
import About from './about';
import NoPage from "./nopage";
import Course from "./course";
import Admin from "./admin_login";
import Teacher from "./teacher_login.js";
import Student from "./student_login";
function Main()
{
  return(
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      </Router>
    </div>
  )
}
export default Main;

