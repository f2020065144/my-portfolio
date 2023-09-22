import React from 'react';
import emporium from './Images/isla.jpg'
import minar from './Images/Body-2-7.jpg'


const FavoriteTouristSpots = () => {
  const size={
    height:'600px',
    width:'1000px'
  }
  const TouristSpots = [
    {
      name: 'Islamabad',
      image: emporium,
      intro: 'The name Islamabad means City of Islam. It is derived from two words:Islam and abad.Islam refers to the religion of Islam, Pakistans state religion, and -abad is a Persian suffix meaning cultivated place,indicating an inhabited place or city.According to a history book by Muhammad Ismail Zabeeh, a school teacher from Arifwala known Abdur Rehman Amritsari proposed of the city.',
    },
    {
      name: 'Lahore',
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
          <br></br>
          <br></br>
          <p>{TouristSpots.intro}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteTouristSpots;
