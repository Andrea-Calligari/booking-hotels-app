import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './AppRouter';

function App() {
  const [hotels, setHotelsList] = useState([]);
  const [hotelSelect, setSelectHotels] = useState(null);

  const handleSelectHotels = (id) => {
    console.log(`Selected hotel ID: ${id}, ${hotelSelect}`,);
    setSelectHotels(id);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/hotels.json');
        const data = await response.json();
        setHotelsList(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <Router >
      <div className="App">
        <NavBar />
        <AppRouter hotels={hotels} handleSelectHotels={handleSelectHotels} />
      </div>
    </Router>
  );
}

export default App;
