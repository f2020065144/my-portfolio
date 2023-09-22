import React from 'react';
import emporium from './Images/emp.jpg'
import minar from './Images/Body-2-7.jpg'


const FavoriteTouristSpots = () => {
  const size={
    height:'600px',
    width:'1000px'
  }
  const TouristSpots = [
    {
      name: 'Emporirum',
      image: emporium,
      intro: 'The Emporium Mall is a premier shopping and entertainment destination located in the heart of the city. Boasting a vast selection of renowned international and local brands, it offers a diverse retail experience. With its luxurious ambiance, delectable dining options, and a range of entertainment activities, the Emporium Mall is a favorite destination for both locals and tourists seeking a world-class shopping and leisure experience.',
    },
    {
      name: 'Minar-e-Pakistan',
      image: minar,
      intro: 'Minar-e-Pakistan, located in Lahore, Pakistan, is an iconic national monument and historical site. It holds immense significance as it was here, on March 23, 1940, that the All-India Muslim League passed the Lahore Resolution, which paved the way for the creation of Pakistan. The impressive tower stands as a symbol of the nations independence struggle and is a popular destination for tourists and history enthusiasts, offering a glimpse into Pakistans rich heritage and the events that led to its formation.',

    },
    // Add more personalities
  ];

  return (
    <div className="favorite-tourist-spots">
      {TouristSpots.map((TouristSpots, index) => (
        <div key={index}>
          <h2>{TouristSpots.name}</h2>
          <img style={size} src={TouristSpots.image} alt={TouristSpots.name} />
          <p>{TouristSpots.intro}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteTouristSpots;
