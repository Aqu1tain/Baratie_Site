import logo from './logo.svg';
import './App.scss';

import { useState } from 'react';
import { useEffect } from 'react';

import Homepage from './pages/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carte from './pages/carte';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/carte" element={<Carte />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
