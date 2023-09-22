import React from 'react';
import { Link } from 'react-router-dom';
import './/NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
      <nav>
        <h1>logo</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorite-personalities">Favorite Personalities</Link></li>
          <li><Link to="/favorite-cities">Favorite Cities</Link></li>
          <li><Link to="/favorite-tourist-spots">Favorite Tourist Spots</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
