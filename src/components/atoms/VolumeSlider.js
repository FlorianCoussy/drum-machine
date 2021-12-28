import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './VolumeSlider.scss';

const VolumeSlider = ({ isTurnedOn }) => {
  const [volume, setVolume] = useState(0);

  const handleChange = ({ currentTarget }) => {
    if (isTurnedOn) setVolume(currentTarget.value);
  };

  useEffect(() => isTurnedOn ? setVolume(15) : setVolume(0), [isTurnedOn]);

  return (
    <div id="volume-slider">
      <div id="volume-lights">
        {[...Array(25)].map((_, i) => (
          <div
            className={(isTurnedOn && volume > 0 && i <= volume - 1) ? 'light-dot active' : 'light-dot'}
            key={i}
          />
        ))}
      </div>
      <div id="slider">
        <input
          value={volume}
          onChange={handleChange}
          type="range"
          min="0"
          max="25"
          step="1"
        />
      </div>
    </div>
  );
};

VolumeSlider.propTypes = {
  isTurnedOn: PropTypes.bool.isRequired,
};

export default VolumeSlider;
