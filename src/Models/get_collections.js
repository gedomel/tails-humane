import '../Styles/App.css';
import speciesEnum from './enums';

/**
 * function to create the GET Request URL to find animals of a species
 * @param  {string} species species of animal (Cat, Dog)
 * @param  {string} animalID id of animal
 * @return {string} url to feed into get request
 */
function getSpeciesMembers(species, animalID) {
  if (species === speciesEnum.CAT) {
    return `http://localhost:5000/cat?id=${animalID}`;
  }
  return `http://localhost:5000/dog?id=${animalID}`;
}
export default getSpeciesMembers;
