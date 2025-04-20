import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';

// Main App component
const App = () => {
  const [tours, setTours] = useState([]); // State to store tours
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(false); // State to track errors
  const [selectedDestination, setSelectedDestination] = useState('All'); // State for selected destination

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Start loading
    setError(false); // Reset error state
    try {
      const res = await fetch(
        'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'
      );
      const data = await res.json();
      setTours(data); // Update tours state
    } catch (err) {
      setError(true); // Set error state if fetching fails
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  // Filter tours based on the selected destination
  const filteredTours =
    selectedDestination === 'All'
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  return (
    <main>
      <h1>Explore Our Tours</h1> {/* Main heading */}
      {/* Destination selector component */}
      <DestinationSelector
        tours={tours}
        selected={selectedDestination}
        setSelected={setSelectedDestination}
      />
      {/* Gallery component to display tours */}
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        selectedDestination={selectedDestination}
        onRemove={removeTour}
        onRefresh={fetchTours}
      />
    </main>
  );
};

export default App;
