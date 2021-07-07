import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../Components/home_page';

/**
 * Test Method to ensure that the cat cards render correctly.
 */
it('Render Cat HomePage Correctly', () => {
  const tree = renderer.create(<HomePage species="Cat" />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Test Method to ensure that the dog cards render as expected.
 */
it('Render Dog HomePage Correctly', () => {
  const tree = renderer.create(<HomePage species="Dog" />).toJSON();
  expect(tree).toMatchSnapshot();
});
