import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Company from './pages/Company';
import Products from './pages/Products';
import Services from './pages/Services';
import Engagements from './pages/Engagements';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <nav>
            <div className="logo">SoCQuest</div>
            <div className="nav-links">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/company">Company</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/engagements">Engagements</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/engagements" element={<Engagements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <p>&copy; 2025 SoCQuest. All rights reserved.</p>
      </footer>
    </div>
  );
}