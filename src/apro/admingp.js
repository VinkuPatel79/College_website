/*import React from "react";
import Admin2 from "./admin2gp";
import  {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

import {
  useNavigate,
} from 'react-router-dom';

function Admin()
{const navigate = useNavigate();

    const handleClick = () => {
      navigate('/google');
    };
  
    return (
      <div>
        <button onClick={handleClick}>Navigate to About</button>
   </div>
   );
}
export default  Admin;*/
import React from 'react';

function Admin() {
  const openFullScreenPage = () => {
    // Define the URL of the page you want to open in full-screen mode
    const url = '/new-page'; // Replace with your desired URL

    // Define window features for full-screen mode
    const features = 'fullscreen=yes,scrollbars=no';

    // Open the new page in full-screen mode
    window.open(url, '_blank', features);
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={openFullScreenPage}>Open Full-Screen Page</button>
    </div>
  );
}

export default Admin;
