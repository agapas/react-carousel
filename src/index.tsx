import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/app';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const imagesUrls:string[] = [
  require('./assets/images/1.jpg'),
  require('./assets/images/2.jpg'),
  require('./assets/images/3.jpg')
];

ReactDOM.render(
  <App imagesUrls={imagesUrls} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
