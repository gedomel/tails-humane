import React from 'react';
import renderer from 'react-test-renderer';
import UpdateForm from '../Components/update_form';
import Update from '../Components/update_animal';

/**
 * Test Method to ensure that the update form renders as expected.
 */
it('Render An Animal Update Correctly', () => {
  const tree = renderer.create(<Update />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Test Method to ensure updating an Availablity to Unavailable on the form renders correctly.
 */
it('Render An Unavailable Dog Status Update Correctly', () => {
  const tree = renderer
    .create(
      <UpdateForm
        name="Mango"
        animalID="395468"
        availablility="Unavailable"
        housetrained="Yes"
        noDogs="OK"
        noCats="OK"
        noKids="OK"
        species="Dog"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Test Method to ensure updating an Availablity to Available on the form renders correctly.
 */
it('Render An Available Cat Status Update Correctly', () => {
  const tree = renderer
    .create(
      <UpdateForm
        name="Mr. Man"
        animalID="7888890"
        availablility="Available"
        housetrained="Yes"
        noDogs="OK"
        noCats="OK"
        noKids="No kids"
        species="Cat"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
