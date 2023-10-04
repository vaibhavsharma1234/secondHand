import React, { useEffect } from 'react';

function DefaultMap({lat,long}) {
  useEffect(() => {
    // Create a function for initializing the map
    console.log("map",lat,long)
      const map = new window.mappls.Map('map', { center: [lat, long] });
      map.setZoom(14);
  }, [lat]);
  

  return (
    <div className='w-3/4 mx-auto'>
    <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Product Location</h2>
      <div id="map" className='h-[400px]'></div>
    </div>
  );
}

export default DefaultMap;
