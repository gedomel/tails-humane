import React, { useState } from 'react';
import '../Styles/App.css';
import style from '../Styles/animal_card.module.css';
import UpdateForm from './update_form';
/**
 * Update creates the form that the user may input changes to
 * @returns a rendering of the form with the id of the animal the user is seeking
 */
function Update() {
  const [error, setError] = useState(false);
  const [query, setQuery] = useState();
  const [animalData, setAnimalData] = useState([]);

  /**
   * Method to set GET request after find button is clicked
   * @param {event} e onSubmit event
   */
  const getSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/animal?id=${query}`);
      if (!response.ok) {
        throw Error("couldn't find");
      }
      const data = await response.json();
      setAnimalData(data);
      setError(null);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="form">
        <h2> Update an Animal</h2>
        <p>Enter Animal ID:</p>
        <form onSubmit={getSubmit} className="form">
          <input
            className="post_put"
            type="text"
            placeholder="enter animal id i.e 8909809"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className="SubmitButton" type="submit">
            Find
          </button>
        </form>

        {error && (
          <div>
            <p className={style.invalid}>Invalid ID. Please try again</p>
          </div>
        )}
      </div>
      {!error && (
        <div>
          {animalData.map((animal) => (
            <UpdateForm
              name={animal.name}
              animalID={animal._id}
              availablility={animal.stage}
              housetrained={animal.housetrained}
              noDogs={animal.no_dogs}
              noCats={animal.no_cats}
              noKids={animal.no_kids}
              species={animal.species}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Update;
