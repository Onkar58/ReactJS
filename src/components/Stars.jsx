import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  
  const fullStars = Math.floor(rating);
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<div key={i} className="text-yellow-500">&#9733;</div>);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<div key={i} className="text-gray-300">&#9734;</div>);
  }
  
  return (
    <div className="flex">
      {stars}
    </div>
  );
};

export default StarRating;
