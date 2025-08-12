import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';
import './index.css';


export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: () => (
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  ),
});
