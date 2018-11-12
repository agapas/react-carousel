import * as React from 'react';
import { Arrow } from './arrow';
import '../assets/lib/css/solid.css';
import '../assets/lib/css/fontawesome.css';
import '../styles/app.css';

export class App extends React.Component {
  render() {
    return <div className="carousel-container">
      <div id="slide">
        <Arrow direction='left' active={false} onClick={() => undefined} />
        <Arrow direction='right' active={false} onClick={() => undefined} />
      </div>
    </div>;
  }
}
