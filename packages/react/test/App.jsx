import React, { useState } from 'react';
import Footer from './Footer';


function App() {
  const [ message, setMessage ] = useState('World');

  return (
    <div className="App h-screen w-screen pt-8 bg-gray-100 prose prose-neutral">
      <h1 className="p-4 text-center">Hello {message}!</h1>
      <form>
        <div className="form-group text-center">
          <input type="text" className="form-input px-4 py-3 rounded-full" onChange={(e) => setMessage(e.target.value)} />
        </div>
      </form>
      <Footer />
    </div>
  );
}


export default App;
