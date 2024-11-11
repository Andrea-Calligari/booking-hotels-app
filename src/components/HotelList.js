import React from 'react'

const HotelList = ({hotels, onSelectHotels}) => {
  return (
    <div>
      {
        hotels && hotels.map((el)=>{
          const {id, name} = el;
         return <div key={id}> {name} </div>

        })
      }
    </div>
  )
}

export default HotelList
