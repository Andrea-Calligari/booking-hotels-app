import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HotelList from './components/HotelList';
import HotelDetails from './components/HotelDetails';
import ConfirmBooking from './components/ConfirmBooking'
const AppRouter = ({ hotels, handleSelectHotels }) => {
    return (

        <Routes>
            <Route path="/" element={<HotelList hotels={hotels} onSelectHotels={handleSelectHotels} />} />
            <Route path="/details/:id" element={<HotelDetails hotels={hotels} />} />
            <Route path="/about-us" element={<ConfirmBooking/>} />
        </Routes>

    );
};

export default AppRouter;
