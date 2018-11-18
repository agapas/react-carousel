import * as React from 'react';

interface ImageSourceProps {
  url: string
}

export const ImageSource = (props:ImageSourceProps) =>
  <div className="source">{`Source of images: ${props.url}`}</div>;
