import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const HotelList = ({ hotels, onSelectHotels }) => {
  const navigate = useNavigate();

  const handleHotelSelect = (id) => {
    console.log(id);
    onSelectHotels(id);
    navigate(`/details/${id}`); // Naviga alla rotta dei dettagli dell'hotel
  };

  return (
    <section className="container content-section">
      <h1 className='list-title'>HOTELS</h1>
      <ul className="row-list">
        {hotels && hotels.map((hotel) => {
          const { id, name, location, image, availability } = hotel;
          return (
            <li className="col-4" key={id}>
              <Card className='hotel-card-content' >
                <CardMedia style={{position:'relative'}}
                  component="img"
                  alt="hotel-image"
                  height="auto"
                  image={image}
                />
                <CardContent>
                <Typography  variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography className="card-badge" variant="body2" component="span">
                    <div>{availability ? <h3 className=' badge available'>Available</h3> : <h3 className=' badge unavailable'>Unavailable</h3>}</div>
                  </Typography>
                  <Typography   component="span">
                    {location}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="error" size="small" onClick={(e) => { e.preventDefault(); handleHotelSelect(id); }}>
                    More Details
                  </Button>
                </CardActions>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HotelList;
