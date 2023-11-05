import React from 'react';
import {
  useNavigate,
} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const handleClick = () => {
   
    navigate('/about');
  };

  return (
    <div>
      <button onClick={handleClick}>Navigate to About</button>
 </div>
 );
}