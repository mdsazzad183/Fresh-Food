// MapContainer.js
// import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  const position = [51.505, -0.09]; 

  return (
    <div className='container'>
        <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
      <Marker position={position}>
        <Popup>
          A popup with information about the marker.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default MapComponent;
