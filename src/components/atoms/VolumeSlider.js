import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VolumeSlider.scss';

const VolumeSlider = ({ isTurnedOn }) => {
  const [volume, setVolume] = useState(0);

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
        <input type="range" min="0" max="100" step="5" value="0" />
      </div>
    </div>
  );
};

VolumeSlider.propTypes = {
  isTurnedOn: PropTypes.bool.isRequired,
};

export default VolumeSlider;
