import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import TeamDetails from './components/TeamDetails';
import { Routes, Route } from "react-router-dom";

import './styles.css';
import './item.css';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details" element={<Details />}>
        <Route path=":teamId" element={<TeamDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
