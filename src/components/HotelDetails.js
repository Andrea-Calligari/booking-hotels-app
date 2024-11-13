import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DateSelector from './DateSelector';
import MapView from './MapView';

const HotelDetails = ({ hotels }) => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const { id } = useParams();
  const hotel = hotels.find(hotel => hotel.id === parseInt(id));

  if (!hotel) {
    return <div>Error, Hotel not Found...</div>;
  }
  const { name, image, description, pricePerNight, roomType, availability, latitude, longitude } = hotel;

  return (
    <div className='container-details'>
      <Card className='details-card'>
        <CardActions>
          <Button variant="contained" color="error" component={Link} to="/">
            <HomeIcon />
          </Button>
          <div>{availability ? <h3 className=' badge available'>Available</h3> : <h3 className=' badge unavailable'>Unavailable</h3>}</div>
        </CardActions>
        <Typography variant="h3" component="div">{name}</Typography>
        <Typography variant="body2" sx={{ width: '100%', color: 'text.primary' }}>
          <p style={{ fontSize: '20px' }}>{description}</p>
        </Typography>
        <CardMedia style={{ width: '900px', margin: '0 auto', padding: '12px', borderRadius: '16px' }}
          component="img"
          alt="hotel-image"
          height="auto"
          image={image}
        />
        <CardContent>
          <div className="card-body">
            <Typography variant="body2">
              <span style={{ marginRight: '10px' }}><span style={{ fontWeight: 'bold' }}>Type:</span> {roomType}</span>
              <span><span style={{ fontWeight: 'bold' }}>Price per night:</span> {pricePerNight}$</span>
            </Typography>
            <DateSelector
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
            />
          </div>
          <MapView latitude={latitude} longitude={longitude} />
          <Button variant="contained" color="success" component={Link} to="">
              Booking
          </Button>
        </CardContent>
      </Card>

    </div>
  );
};

export default HotelDetails;
