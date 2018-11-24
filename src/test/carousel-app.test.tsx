import * as React from 'react';
import { shallow } from 'enzyme';
import { CarouselApp } from '../components/carousel-app';

describe('CarouselApp', () => {
  it('renders without crashing', () => {
    shallow(<CarouselApp />);
  });
});
