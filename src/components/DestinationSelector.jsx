import React from 'react';

const DestinationSelector = ({ tours, selected, setSelected }) => {
  const destinations = ['all', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div className="destination-selector">
      <label htmlFor="destination">filter by destination:</label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {destinations.map((destination, index) => 
        (
          <option key={index} value={destination}>{destination}</option>
        ))}
      </select>
    </div>
  );
};
export default DestinationSelector;
