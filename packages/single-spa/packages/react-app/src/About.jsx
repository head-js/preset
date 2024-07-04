import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div className="text-center">
      <h1>About React App</h1>
      <p><Link to="/react-app">Goto Home</Link></p>
    </div>
  );
}
