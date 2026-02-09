import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from 'react-router-dom';
import Home from './Home';
import PageV1 from './pages/page-v1';


function RootLayout() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}


const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/page-v1" element={<PageV1 />} />
      <Route
        path="/lazy-demo"
        lazy={async () => {
          const mod = await import('./pages/lazy-demo');
          return { Component: mod.Component };
        }}
      />
    </Route>
  )
);


function App() {
  console.log('[App]');

  return (
    <RouterProvider router={router} />
  );
}


export default App;
