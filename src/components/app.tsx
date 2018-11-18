import * as React from 'react';
import { Dot } from './dot';
import { Slide } from './slide';
import '../assets/lib/css/solid.css';
import '../assets/lib/css/fontawesome.css';
import '../styles/app.css';

export interface CarouselProps {
  imagesUrls: string[]
}

type CarouselState = {
  activeSlideIndex: number
};

type Props = CarouselProps & CarouselState;

export class App extends React.Component<CarouselProps, CarouselState> {
  constructor(props:Props) {
    super(props);
    this.state = { activeSlideIndex: 0 };
  }
  render() {
    const { imagesUrls = [] } = this.props;
    const { activeSlideIndex } = this.state;

    return <div className="carousel-container">
      <Slide
        imageUrl={imagesUrls[activeSlideIndex]}
        onClick={() => undefined} />
      <div className="source">Source of images: https://pixabay.com</div>
      <ul className="dots">
        {imagesUrls.map((_url, index) => <Dot
          key={index}
          isActive={index === activeSlideIndex}
          onClick={() => undefined} />
        )}
      </ul>
    </div>;
  }
}
