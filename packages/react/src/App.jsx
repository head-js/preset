import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PageV1 from './pages/page-v1';


function App() {
  console.log('[App]');

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-v1" element={<PageV1 />} />
      </Routes>
    </div>
  );
}


export default App;
