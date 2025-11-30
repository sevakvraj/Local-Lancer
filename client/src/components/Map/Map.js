import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import styles from './Map.module.css';

// Fix for default marker icon issue remains the same
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// This component now just reports the click event
function ClickHandler({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng); // Pass the coordinates up to the parent
    },
  });
  return null;
}

// 1. The Map component now receives gigs and a handler function as props
const Map = ({ gigs, onLocationSelect }) => {
  const [clickedPos, setClickedPos] = useState(null);

  const handleMapClick = (latlng) => {
    setClickedPos(latlng);      // Set the position for the blue marker
    onLocationSelect(latlng); // 2. Call the function passed down from HomePage
  };

  return (
    <div className={styles.mapWrapper}>
      <p className={styles.instruction}>
        Click on the map to find jobs in that area!
      </p>
      <MapContainer center={[22.6916, 72.8634]} zoom={13} className={styles.mapContainer}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <ClickHandler onMapClick={handleMapClick} />
        
        {/* Marker for the location the user clicked */}
        {clickedPos && <Marker position={clickedPos} />}

        {/* 3. Markers are now based on the gigs passed down as a prop */}
        {gigs.map(job => (
          <Marker key={job._id} position={[job.location.coordinates[1], job.location.coordinates[0]]}>
            <Popup>
              <b>{job.title}</b><br />
              Budget: ${job.budget}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;