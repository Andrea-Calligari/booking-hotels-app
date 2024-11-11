import React, { useState, useEffect } from 'react';
import './App.css';
import HotelList from './components/HotelList';
function App() {
  const [hotels, setHotelsList] = useState([])

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/hotels.json');
        const data = await response.json()
        // console.log(data);
        setHotelsList(data);



      } catch (error) {
        console.log("Error", error)
      }

    }

    fetchHotels();
  }, [])
  return (
    <div className="App">
      <HotelList hotels={hotels}/>
    </div>
  );
}

export default App;
