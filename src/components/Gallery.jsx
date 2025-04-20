import React from 'react'; 
import TourCard from './TourCard'; 

const Gallery = ({ tours, onRemove, loading, error, onRefresh }) => { 
    if (loading) return <h2>Loading...</h2>; 
    if (error) return <h2>Something went wrong. Please try again later.</h2>; 
    if (tours.length === 0) { 
        return (
            <div>
            <h2>No Tours Left</h2> 
            <p> Refresh to reload, or select a different destination.</p> 
            <button onClick={onRefresh}>Refresh Tours</button> 
            </div>
        );
    }

  return ( 
    <section className="gallery">  
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} /> 
      ))}
    </section>
  );
};

export default Gallery; 