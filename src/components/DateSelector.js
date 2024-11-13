import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DateSelector = ({checkIn, checkOut, setCheckIn, setCheckOut}) => {
  

  return (
    <div className='date-container' >
      <label >Check-in:</label>
      <DatePicker 
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        selectsStart
        startDate={checkIn}
        endDate={checkOut}
        midDate={new Date()}
      />
      <label >Check-Out:</label>
      <DatePicker
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        selectsEnd
        startDate={checkIn}
        endDate={checkOut}
        midDate={checkIn}

      />


    </div>
  )
}

export default DateSelector
