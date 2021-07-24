import React from 'react';
import { shallow } from 'enzyme';
import { HoverComponents } from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<HoverComponents />);
  expect(renderedComponent.find('.common-hover-components').length).toBe(1);
});
