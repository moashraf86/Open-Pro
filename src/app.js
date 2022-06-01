import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home';
import {Blog}  from './components/Blog';
import {About}  from './components/About';
import {Header}  from "./components/Header";
import {Pricing}  from './components/Pricing';
import {Features}  from './components/Features';
import './app.css';

export default function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </Router>
    </div>
  )
}