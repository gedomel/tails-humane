import React from 'react';
import renderer from 'react-test-renderer';
import UpdateForm from '../Components/update_form';

/**
 * Test Method to ensure dropdown 'No Kids' selection updates as expected
 */
it('Render An Updated No Kids Status Update', () => {
  const tree = renderer
    .create(
      <UpdateForm
        name="Mango"
        animalID="395468"
        availablility="Available"
        housetrained="Yes"
        noDogs="Unknown"
        noCats="Unknown"
        noKids="OK"
        species="Dog"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Test Method to ensure dropdown 'No Dogs' selection updates as expected
 */
it('Render A No Dogs Status Update Correctly', () => {
  const tree = renderer
    .create(
      <UpdateForm
        name="Mr. Man"
        animalID="7888890"
        availablility="Available"
        housetrained="Unknown"
        noDogs="No dogs"
        noCats="Unknown"
        noKids="Unknown"
        species="Cat"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Test Method to ensure dropdown 'No Cats' selection updates as expected
 */
it('Render A No Cats Status Update Correctly', () => {
  const tree = renderer
    .create(
      <UpdateForm
        name="Mango"
        animalID="395468"
        availablility="Available"
        housetrained="Yes"
        noDogs="Unknown"
        noCats="No cats"
        noKids="Unknown"
        species="Dog"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
