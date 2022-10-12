import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from "react-router-dom"
import {HashRouter} from "react-router-dom"
import {ContextProvider} from "./Context"

import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      {/* <BrowserRouter> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </BrowserRouter> */}
    </ContextProvider>
  </React.StrictMode>
);
