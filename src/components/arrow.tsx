import * as React from 'react';

interface ArrowProps {
  direction: string
  active: boolean
  onClick: () => void
}

export const Arrow = (props:ArrowProps) => {
  const { direction, active, onClick } = props;
  const id = direction === 'left' ? 'previous' : 'next';
  const activeClass = `arrow ${active ? 'active' : ''}`;

  return <div id={id} className={activeClass} onClick={onClick}>
      <i className={`fas fa-chevron-circle-${direction} fa-2x`}></i>
    </div>;
};
