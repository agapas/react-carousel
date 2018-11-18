import * as React from 'react';

interface DotProps {
  isActive: boolean
  onClick: () => void
}

export const Dot = (props:DotProps) => {
  const { isActive, onClick } = props;
  const className = `dot ${isActive ? 'active' : ''}`;

  return <li className={className} onClick={onClick}></li>;
};
