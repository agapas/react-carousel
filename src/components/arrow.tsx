import * as React from 'react';

interface ArrowProps {
  direction: string
  onClick: () => void
}

export const Arrow = (props:ArrowProps) => {
  const { direction, onClick } = props;
  const id = direction === 'left' ? 'previous' : 'next';

  return <div id={id} className="arrow" onClick={onClick}>
      <i className={`fas fa-chevron-circle-${direction} fa-2x`}></i>
    </div>;
};
