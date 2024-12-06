import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthhContext } from './components/context/authContext/authContext';
import { ModallRegisterContext } from './components/context/modalContext/modalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthhContext>
    <ModallRegisterContext>
      <App />
    </ModallRegisterContext>
  </AuthhContext>
);


