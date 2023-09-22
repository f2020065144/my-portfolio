import React from 'react';
import afridiImage from './Images/afridi.jpg';
import viratImage from './Images/virat.jpg';

const FavoritePersonalities = () => {
  const size={
    height:'500px',
    width:'500px'
  }
  const personalities = [
    {
      name: 'Afridi',
      image: afridiImage,
      intro: ' Sahibzada Mohammad Shahid Khan  Pashto: شاهد افریدی; born 1 March 1977) is a Pakistani former cricketer and captain of the Pakistan national cricket team. An all-rounder, Afridi was a right-handed leg spinner and a right-handed batsman.',
    },
    {
      name: 'Virat Kholi',
      image: viratImage,
      intro: 'Virat Kohli is an Indian cricketer who plays for India national cricket team. He was born in Delhi, India on November 5, 1988. Virat is the first player in ICC cricket history to win all 3 ICC awards in a single year- ICC ODI player of the year, ICC Test player of the year and ICC Player of the year award in 2018.',
    },
    // Add more personalities
  ];

  return (
    <div className="favorite-personalities">
      {personalities.map((personality, index) => (
        <div key={index}>
          <h2>{personality.name}</h2>
          <img style={size} src={personality.image} alt={personality.name} />
          <br></br>
          <br></br>
          <p>{personality.intro}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritePersonalities;
