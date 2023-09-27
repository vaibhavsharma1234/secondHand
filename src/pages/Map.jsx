import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
      const map = new window.mappls.Map('map', { center: [31.480743, 76.190828] });
      map.setZoom(18);
  }, []);

  return (
    <div>
      <div>Hello</div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
}

export default Map;
