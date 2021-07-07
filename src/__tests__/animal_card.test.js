import React from 'react';
import renderer from 'react-test-renderer';
import AnimalCard from '../Components/animal_card';

/**
 * Test Method to ensure that Animal Card for a dog renders as expected.
 */
it('Render A Dog Animal Card Correctly', () => {
  const tree = renderer
    .create(
      <AnimalCard
        key="25283313"
        animalID="25283313"
        image="https://g.petango.com/photos/651/d8dc34ea-19ee-47a8-9394-d8d501c993c5.jpg"
        name="Summmer"
        breed="Mixed Breed"
        size="Large"
        stage="Available"
        age={8}
        gender="Female"
        isHousetrained="Yes"
        noDogs="No dogs"
        noCats="Unknown"
        noKids="Unknown"
        color="Brown/White"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Test Method to ensure that Animal Card for a Cat renders as expected.
 */
it('Render A Cat Animal Card Correctly', () => {
  const tree = renderer
    .create(
      <AnimalCard
        key="46403201"
        animalID="46403201"
        image="https://g.petango.com/photos/651/5c64ab1d-c4f0-4479-9e21-27c3f2438e69.jpg"
        name="Fuzzy"
        breed="Domestic Longhair/Mix"
        size="Medium"
        stage="Available"
        age={15.2}
        gender="Male"
        isHousetrained="Yes"
        noDogs="Unknown"
        noCats="No cats"
        noKids="Unknown"
        color="Black"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
