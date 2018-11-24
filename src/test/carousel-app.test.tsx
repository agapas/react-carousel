import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CarouselApp } from '../components/carousel-app';

// TODO: instal enzyme to use shallow rendering for testing components

describe('CarouselApp', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarouselApp imagesUrls={[]} imagesSource={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
