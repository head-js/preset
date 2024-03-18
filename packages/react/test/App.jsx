import React, { useState } from 'react';
import $http from '@head/http';
import Footer from './Footer';


async function doGet(status) {
  const { code, message, data, res } = await $http.get(`https://httpbin.org/status/${status}`, { k1: 'v1' });
  console.log(res);
}


async function doPost(status) {
  try {
    const { code, message, data, res } = await $http.post(`https://httpbin.org/status/${status}`, { k1: 'v1' }, { k2: 'v2' });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}


function App() {
  const [ status, setStatus ] = useState('200');

  return (
    <div className="App h-screen w-screen pt-8 bg-gray-100 prose prose-neutral">
      <h1 className="p-4 text-center">Hello {status}!</h1>
      <form>
        <div className="form-group mb-4 text-center">
          <input type="text" className="form-input px-4 py-3 rounded-full" onChange={(e) => setStatus(e.target.value)} />
        </div>
        <div className="form-group mb-4 text-center">
          <button type="button" className="form-input px-4 py-3 bg-gray-200 rounded-xl" onClick={() => doGet(status)}>doGet</button>
        </div>
        <div className="form-group mb-4 text-center">
          <button type="button" className="form-input px-4 py-3 bg-gray-200 rounded-xl" onClick={() => doPost(status)}>doPost</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}


export default App;
