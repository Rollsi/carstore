import React from 'react';

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width = '100%',
  height = '100%',
  text = 'Image',
  className = ''
}) => {
  return (
    <div
      className={`bg-slate-700 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <span className="text-slate-400">{text}</span>
    </div>
  );
};

export default ImagePlaceholder; 