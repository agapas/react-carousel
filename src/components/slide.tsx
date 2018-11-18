import * as React from 'react';
import { Arrow } from './arrow';

interface SlideProps {
  imageUrl: string,
  onClick: () => void
}

export const Slide = (props:SlideProps) => {
  const { imageUrl, onClick } = props;
  const style = { backgroundImage: `url('${imageUrl}')` };

  return <div className="slide" style={style}>
    <Arrow key="left" direction="left" onClick={onClick} />
    <Arrow key="right" direction="right" onClick={onClick} />
  </div>;
};
