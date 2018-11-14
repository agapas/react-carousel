import * as React from 'react';
import { Arrow } from './arrow';

interface SlideProps {
  imageUrl: string
}

export const Slide = (props:SlideProps) => {
  const { imageUrl } = props;
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return <div className="slide" style={style}>
    <Arrow
      key="left"
      direction="left"
      active={false}
      onClick={() => undefined}
    />
    <Arrow
      key="right"
      direction="right"
      active={false}
      onClick={() => undefined}
    />
  </div>;
};
