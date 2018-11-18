import * as React from 'react';
import { Arrow } from './arrow';

interface SlideProps {
  imageUrl: string,
  onChange: (e:any) => void
}

export const Slide = (props:SlideProps) => {
  const { imageUrl, onChange } = props;
  const style = { backgroundImage: `url('${imageUrl}')` };

  return <div className="slide" style={style}>
    <Arrow key="left" direction="left" onClick={onChange} />
    <Arrow key="right" direction="right" onClick={onChange} />
  </div>;
};
