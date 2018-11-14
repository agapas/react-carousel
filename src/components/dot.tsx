import * as React from 'react';

interface DotProps {
  id: string
  active: boolean
  onClick: () => void
}

export const Dot = (props:DotProps) => {
  const { id, active, onClick } = props;
  const className = `dot ${active ? 'active' : ''}`;

  return <li id={id} className={className} onClick={onClick}></li>;
};
