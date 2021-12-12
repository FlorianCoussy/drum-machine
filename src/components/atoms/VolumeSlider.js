import React from 'react';
import './VolumeSlider.scss';

const VolumeSlider = () => {
  return (
    <div id="volume-slider">
      <div id="volume-lights"></div>
      <div id="slider">
        <input type="range" />
      </div>
    </div>
  );
};

export default VolumeSlider;
