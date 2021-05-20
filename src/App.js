import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Routes from './Routes/routes';

import { AuthProvider } from './Components/Context/AuthContext';

import "./global.css";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;