import React, { useEffect } from 'react'
import tt from '@tomtom-international/web-sdk-maps';

const MapView = ({ latitude, longitude }) => {

  useEffect(() => {
    if (!latitude || !longitude) {
      console.log('invalid coordinate', latitude, longitude);
      return;
    }
    const map = tt.map({
      key: 'qyzSHivil9OTy8KwA9WCnXUKwWFeN2ca',
      container: 'map',
      center: [longitude, latitude],
      zoom: 15,

    });
    const marker = new tt.Marker().setLngLat([longitude, latitude]).addTo(map);
    return () => { map.remove() }
  }, [longitude, latitude]);

  return (
    <>
      <div className="container-map">

        <div id='map' style={{ height: '250px', width: '100%', margin: '0 auto', borderRadius: '16px' }}></div>
      </div>

    </>
  )
}

export default MapView
