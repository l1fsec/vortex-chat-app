import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; //This was pain.
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        {/*BrowserRouter in Routes. This is needed! Also Route tag must be wrapped in Routes, to work.*/}
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />{" "}
          {/*  If we call anything that isn't /login, /register or /dashboard return us to /dashboard. */}
        </Routes>
      </BrowserRouter>
      <AlertNotification />
    </>
  );
}

export default App;

//React V5 removed old Routing, forgot I have React V6.
