import React from 'react';
import Header from './Fake/Header';
import Home from './Fake/Home';
import Jewelry from './Fake/Jewelry';
import Electronics from './Fake/Electronics';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Man from './Fake/Man';
import Women from './Fake/Women';
import Error from './Fake/Error';

export default function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Jewelry" element={<Jewelry />} /> 
          <Route path="/Electronics" element={<Electronics />} /> 
          <Route path="/Man" element={<Man />} /> 
          <Route path="/Women" element={<Women />} /> 
          <Route path="*" element={<Error />} /> 




        

        </Routes>
    </div>
  );
}
