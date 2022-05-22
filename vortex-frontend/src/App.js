import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
      <Route exact path='/login' element={ <LoginPage/>} />
      <Route exact path='/register' element={<RegisterPage/>} />
      <Route exact path='/dashboard' element={<Dashboard/>} />
      <Route path='/' element={<Navigate to="/dashboard" />} />
  </Routes>
  </BrowserRouter>  
  </>
  
  );
}

export default App;
