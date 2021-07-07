import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import PropTypes from 'prop-types';
import AnimalCard from './animal_card';
import getAllAvailable from '../Models/get_available_animals';

/**
 * HomePage renders all available animals in either
 * cat or dog collection.
 * @param {string} species, type of species (Cat or Dog)
 * @returns rendered cards for each animal in collection
 */
function HomePage({ species }) {
  const [animalData, setAnimalData] = useState([]);
  const fetchAnimalData = async () => {
    const response = await fetch(getAllAvailable(species));
    const data = await response.json();
    setAnimalData(data);
  };

  useEffect(() => {
    fetchAnimalData();
  });

  return (
    <div className="HomePage">
      <div className="animal_display">
        {animalData.map((animal) => (
          <AnimalCard
            key={animal._id}
            animalID={animal._id}
            image={animal.image}
            name={animal.name}
            breed={animal.breed}
            size={animal.size}
            stage={animal.stage}
            age={animal.age}
            gender={animal.gender}
            isHousetrained={animal.housetrained}
            noDogs={animal.no_dogs}
            noCats={animal.no_cats}
            noKids={animal.no_kids}
            color={animal.color}
          />
        ))}
      </div>
    </div>
  );
}
HomePage.propTypes = {
  species: PropTypes.string.isRequired,
};
export default HomePage;
