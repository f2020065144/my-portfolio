import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import WelcomPage from './components/WelcomPage';
import FavoritePersonalities from './components/FavoritePersonalities';
import FavoriteCities from './components/FavoriteCities';
import FavoriteTouristSpots from './components/FavoriteTouristSpots';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<WelcomPage />} />
        <Route path="/favorite-personalities" element={<FavoritePersonalities />} />
        <Route path="/favorite-cities" element={<FavoriteCities />} />
        <Route path="/favorite-tourist-spots" element={<FavoriteTouristSpots />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;