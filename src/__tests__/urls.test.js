import getSpeciesMembers from '../Models/get_collections';
import getAllAvailable from '../Models/get_available_animals';

/**
 * Test Method to ensure that the correct url is returned to get all available cats
 */
describe('get url for available cats', () => {
  it('getAvailableCatURL', async () => {
    const url = getAllAvailable('Cat');
    expect(url).toEqual(
      'http://localhost:5000/search?species=Cat&stage=Available',
    );
  });
});

/**
 * Test Method to ensure that the correct url is returned to get all available dogs
 */
describe('get url for available dogs', () => {
  it('getAvailableDogURL', async () => {
    const url = getAllAvailable('Dog');
    expect(url).toEqual(
      'http://localhost:5000/search?species=Dog&stage=Available',
    );
  });
});

/**
 * Test Method to ensure that the correct url is created for dog PUT request
 */
describe('get PUT request url for dog', () => {
  it('getPUTRequestURLDog', async () => {
    const url = getSpeciesMembers('Dog', '7777801');
    expect(url).toEqual('http://localhost:5000/dog?id=7777801');
  });
});

/**
 * Test Method to ensure that the correct url is created for cat PUT request
 */
describe('get PUT request url for cat', () => {
  it('getPUTRequestURLCat', async () => {
    const url = getSpeciesMembers('Cat', '5789421');
    expect(url).toEqual('http://localhost:5000/cat?id=5789421');
  });
});
