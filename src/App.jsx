import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";




export default function App() { 

  return (
  <Routes>
          <Route  path="/login"/>
          <Route  path="/register"/>
          <Route path="*" element={<Navigate replace to="/login" />}></Route>
  </Routes>
  );
}