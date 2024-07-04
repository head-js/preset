import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from './Footer';


export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/react-app">Home</Link></li>
          <li><Link to="/react-app/about">About</Link></li>
          <li><Link to="/vue-app">Vue</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/react-app" element={<Home />} />
        <Route path="/react-app/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
