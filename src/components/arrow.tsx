import * as React from 'react';

interface ArrowProps {
  direction: string
  onClick: (e:any) => void
}

export const Arrow = (props:ArrowProps) => {
  const { direction, onClick } = props;

  return <div className="arrow" onClick={onClick}>
    <i id={direction} className={`fas fa-chevron-circle-${direction} fa-2x`}></i>
  </div>;
};
