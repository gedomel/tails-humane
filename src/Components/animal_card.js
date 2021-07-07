import React from 'react';
import PropTypes from 'prop-types';
import style from '../Styles/animal_card.module.css';
/**
 * Animal Card renders a Card like view of animal information
 * @param {string} name: animal name
 * @param {string} image: animal's image url
 * @param {string} animalID: animal's id
 * @param {string} breed: animal's breed
 * @param {number} age: animal's age
 * @param {string} gender: animal's gender
 * @param {string} size: animal's size (i.e Large)
 * @param {string} stage: animal's availability (Available, Unavailable)
 * @param {string} color: animal's color(i.e Brown/White)
 * @param {string} isHousetrained: housetrained (Partially, Yes, No, Unknown)
 * @param {string} noDogs: animal can be with dogs (OK, No dogs, Unknown)
 * @param {string} noCats: animal can be with cats (OK, No cats, Unknown)
 * @param {string} noKids: animal can be with kids (OK, No small kids, Unknown)
 * @returns animal card view with provided params inputted
 */
const AnimalCard = ({
  name,
  image,
  animalID,
  breed,
  age,
  gender,
  size,
  stage,
  color,
  isHousetrained,
  noDogs,
  noCats,
  noKids,
}) => (
  <div className={style.animal_card}>
    <h1 className={style.animal_name}>{name}</h1>
    <h4>{breed}</h4>
    <h4>
      Tails ID:
      {animalID}
    </h4>
    <img className={style.image} src={image} alt="" />
    <h3>Information</h3>
    <ul id="navigation">
      <li>
        Availability:
        {stage}
      </li>
      <li>
        Age:
        {age}
        (years)
      </li>
      <li>
        Gender:
        {gender}
      </li>
      <li>
        Size:
        {size}
      </li>
      <li>
        Color:
        {color}
      </li>
      <li>
        Housetrained:
        {isHousetrained}
      </li>
    </ul>
    <h3>Behavior Restrictions</h3>
    <ul id="navigation">
      <li>
        No Dogs:
        {noDogs}
      </li>
      <li>
        No Cats:
        {noCats}
      </li>
      <li>
        No Kids:
        {noKids}
      </li>
    </ul>
  </div>
);
AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  animalID: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isHousetrained: PropTypes.string.isRequired,
  noDogs: PropTypes.string.isRequired,
  noCats: PropTypes.string.isRequired,
  noKids: PropTypes.string.isRequired,
  stage: PropTypes.string.isRequired,
};

export default AnimalCard;
