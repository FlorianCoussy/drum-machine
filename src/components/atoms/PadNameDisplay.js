import React from 'react';
import PropTypes from 'prop-types';
import './PadNameDisplay.scss';

const PadNameDisplay = ({ isTurnedOn }) => {
  return (
    <div id="pad-name-display" className={isTurnedOn ? 'active' : ''}>
      <span id="pad-key">Q</span>
      <span id="pad-name">Heater-1</span>
    </div>
  );
};

PadNameDisplay.propTypes = {
  isTurnedOn: PropTypes.bool.isRequired,
};

export default PadNameDisplay;