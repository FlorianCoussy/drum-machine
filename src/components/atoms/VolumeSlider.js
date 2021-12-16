import React from 'react';
import './VolumeSlider.scss';

const VolumeSlider = () => {
  return (
    <div id="volume-slider">
      <div id="volume-lights">
        {[...Array(15)].map((_, i) => (
          <div className="light-dot active" key={i} />
        ))}
        {[...Array(10)].map((_, i) => (
          <div className="light-dot" key={i} />
        ))}
      </div>
      <div id="slider">
        <input type="range" min="0" max="100" step="5" />
      </div>
    </div>
  );
};

export default VolumeSlider;
