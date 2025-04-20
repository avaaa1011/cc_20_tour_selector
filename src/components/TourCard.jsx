import React, { useState } from 'react';

// TourCard component displays individual tour details
const TourCard = ({ id, image, info, price, name, onRemove }) => {
  const [readMore, setReadMore] = useState(false); // State to toggle full description

  return (
    <article className="tour-card">
      <img src={image} alt={name} />  {/* Display tour image */}
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>  {/* Display tour name and price */}
        </div>
        <p>
          {/* button that gives the option to read more of the tour's desciption */}
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less!' : 'read more!'}
          </button>
        </p>
        {/* Button that will remove the tour*/}
        <button className="btn" onClick={() => onRemove(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default TourCard;
