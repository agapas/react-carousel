import * as React from 'react';
import { Slide } from './slide';
import BackgroundImage from '../assets/images/2.jpg';
import '../assets/lib/css/solid.css';
import '../assets/lib/css/fontawesome.css';
import '../styles/app.css';

interface CarouselProps {
  imagesUrls: string[]
}

type CarouselState = {
  currentIndex: number
};

type Props = CarouselProps & CarouselState;

const defaultState:CarouselState = {
  currentIndex: 0
};

// const imagesUrls = [
//   "../assets/images/1.jpg",
//   "../assets/images/2.jpg",
//   "../assets/images/3.jpg"
// ];

export class App extends React.Component<CarouselProps, CarouselState> {
  constructor(props:Props) {
    super(props);
    this.state = defaultState;
  }
  render() {
    return <div className="carousel-container">
      <Slide imageUrl={BackgroundImage} />
      <div className="source">Source of images: https://pixabay.com</div>
      <ul className="dots">
        <li id="1" className="dot active" onClick={() => undefined}></li>
        <li id="2" className="dot" onClick={() => undefined}></li>
        <li id="3" className="dot" onClick={() => undefined}></li>
      </ul>
    </div>;
  }
  static defaultProps = { imagesUrls: [BackgroundImage] };
}
