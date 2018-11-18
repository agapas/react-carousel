import * as React from 'react';
import { Dot } from './dot';
import { ImageSource } from './image-source';
import { Slide } from './slide';
import '../assets/lib/css/solid.css';
import '../assets/lib/css/fontawesome.css';
import '../styles/app.css';

export interface CarouselProps {
  imagesUrls: string[]
}

type CarouselState = {
  currentSlideIndex: number
};

type Props = CarouselProps & CarouselState;

export class App extends React.Component<CarouselProps, CarouselState> {
  constructor(props:Props) {
    super(props);
    this.state = { currentSlideIndex: 0 };
  }

  onSlideChange = (e:any) => {
    const { imagesUrls } = this.props;
    const { currentSlideIndex } = this.state;

    const newIndex = e.target.id === 'left'
      ? currentSlideIndex - 1
      : currentSlideIndex + 1;

    const lastIndex = imagesUrls.length - 1;

    const newSlideIndex = newIndex < 0
      ? lastIndex
      : newIndex > lastIndex ? 0 : newIndex;

    this.setState({ currentSlideIndex: newSlideIndex });
  }

  onDotChange = (e:any) =>
    this.setState({ currentSlideIndex: parseInt(e.target.id) });

  render() {
    const { imagesUrls = [] } = this.props;
    const { currentSlideIndex } = this.state;

    return <div className="carousel-container">
      <Slide
        imageUrl={imagesUrls[currentSlideIndex]}
        onChange={this.onSlideChange} />
      <ImageSource url="https://pixabay.com"/>
      <ul className="dots">
        {imagesUrls.map((_url, index) => <Dot
          key={index}
          id={index}
          isActive={index === currentSlideIndex}
          onClick={this.onDotChange} />
        )}
      </ul>
    </div>;
  }
}
