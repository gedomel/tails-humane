import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from '../Styles/animal_card.module.css';
import getSpeciesMembers from '../Models/get_collections';
/**
 * UpdateForm renders a form with dropdowns to change animal attributes
 * @param {string} name: animal name
 * @param {string} species: animal's species
 * @param {string} animalID: animal's id
 * @param {string} stage: animal's availability (Available, Unavailable)
 * @param {string} housetrained: housetrained (Partially, Yes, No, Unknown)
 * @param {string} noDogs: animal can be with dogs (OK, No dogs, Unknown)
 * @param {string} noCats: animal can be with cats (OK, No cats, Unknown)
 * @param {string} noKids: animal can be with kids (OK, No small kids, Unknown)
 * @returns a inputtable form with general bio information for selected animal
 */
const UpdateForm = ({
  name,
  species,
  animalID,
  availablility,
  noDogs,
  noCats,
  noKids,
  housetrained,
}) => {
  const [selectAvailable, setAvailable] = useState(availablility);
  const [selectNoDogs, setDogs] = useState(noDogs);
  const [selectNoCats, setCats] = useState(noCats);
  const [selectNoKids, setKids] = useState(noKids);
  const [formError, setFormError] = useState(false);
  const [formMessage, setMessage] = useState('');
  const [selectHousetrained, setTrained] = useState(housetrained);

  /**
   * Method to set PUT request after submit button is clicked
   * @param {event} e onSubmit event
   */
  const getSubmit = async (e) => {
    const putUpdate = {
      _id: animalID,
      housetrained: selectHousetrained,
      no_dogs: selectNoDogs,
      no_cats: selectNoCats,
      no_kids: selectNoKids,
      stage: selectAvailable,
    };
    e.preventDefault();

    try {
      const response = await fetch(getSpeciesMembers(species, animalID), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(putUpdate),
      });
      setMessage('Success! Animal has been updated.');
      setFormError(false);
      if (!response.ok) {
        throw Error('Animal Not Found');
      }
    } catch (error) {
      setMessage('Error. Animal was not changed.');
      setFormError(true);
    }
  };
  return (
    <div className={style.updateform}>
      <form onSubmit={getSubmit}>
        <p>
          Name:
          {name}
        </p>
        <p>
          TAILS ID:
          {animalID}
        </p>
        <p>
          Species:
          {species}
        </p>
        <p>Select Availability:</p>
        <div>
          <select
            value={selectAvailable}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>

          <p>Housetrained?:</p>
          <select
            value={selectHousetrained}
            onChange={(e) => setTrained(e.target.value)}
          >
            <option value="Partially">Partially</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>

          <p>No Dogs?:</p>
          <select
            value={selectNoDogs}
            onChange={(e) => setDogs(e.target.value)}
          >
            <option value="OK">OK</option>
            <option value="No dogs">No dogs</option>
            <option value="Unknown">Unknown</option>
          </select>

          <p>No Cats?:</p>
          <select
            value={selectNoCats}
            onChange={(e) => setCats(e.target.value)}
          >
            <option value="OK">OK</option>
            <option value="No cats">No cats</option>
            <option value="Unknown">Unknown</option>
          </select>

          <p>No Kids?:</p>
          <select
            value={selectNoKids}
            onChange={(e) => setKids(e.target.value)}
          >
            <option value="OK">OK</option>
            <option value="No small kids">No small kids</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <button className="SubmitButton" type="submit">
          Submit Changes
        </button>

        {!formError && <p className={style.success}>{formMessage}</p>}
        {formError && <p className={style.error}>{formMessage}</p>}
      </form>
    </div>
  );
};
UpdateForm.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  animalID: PropTypes.string.isRequired,
  availablility: PropTypes.string.isRequired,
  noDogs: PropTypes.string.isRequired,
  noCats: PropTypes.string.isRequired,
  noKids: PropTypes.string.isRequired,
  housetrained: PropTypes.string.isRequired,
};

export default UpdateForm;
