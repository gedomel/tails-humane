import '../Styles/App.css';
import speciesEnum from './enums';

/**
 * function to create the GET Request URL to find all Available animals
 * @param  {string} species species of animal (Cat, Dog)
 * @return {string} url to feed into get request
 */
function getAllAvailable(species) {
  if (species === speciesEnum.CAT) {
    return 'http://localhost:5000/search?species=Cat&stage=Available';
  }
  return 'http://localhost:5000/search?species=Dog&stage=Available';
}
export default getAllAvailable;
