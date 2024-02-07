import logo from './logo.svg';
import './App.scss';

import { useState } from 'react';
import { useEffect } from 'react';

import Homepage from './pages/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carte from './pages/carte';
import Contact from './pages/contact';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/carte/*" element={<Carte />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/*" element={<Contact />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
