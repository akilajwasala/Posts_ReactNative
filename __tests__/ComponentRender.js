// __tests__/Posts.js
import React from 'react';
import { GridCell, PostCell } from '../src/components';

import mock from './mock';

import renderer from 'react-test-renderer';

//passing test case 
test('GridCell renders correctly', () => {
  const tree = renderer.create(
  <GridCell 
    navigation={mock.gridCell.navigation}
    item={mock.gridCell.item}
    numColumns={mock.gridCell.numColumns}
  />
).toJSON();
  expect(tree).toMatchSnapshot();
});


//failing test case
test('PostCell renders correctly', () => {
  const tree = renderer.create(
  <PostCell 
    navigation={mock.postCell.navigation}
    item={mock.postCell.item}
    name={mock.postCell.name}
  />
).toJSON();
  expect(tree).toMatchSnapshot();
});