import React, { useEffect } from 'react';

function DefaultMap({lat,long}) {
  useEffect(() => {
    // Create a function for initializing the map
    console.log("map",lat,long)
      const map = new window.mappls.Map('map', { center: [lat, long] });
      map.setZoom(14);
  }, [lat]);
  

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
}

export default Map;
