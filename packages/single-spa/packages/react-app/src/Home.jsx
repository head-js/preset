import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="text-center">
      <h1>Hello React App</h1>
      <p><Link to="/react-app/about">Goto About</Link></p>
    </div>
  );
}
