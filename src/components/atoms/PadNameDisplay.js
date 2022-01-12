import React from 'react';
import PropTypes from 'prop-types';
import './PadNameDisplay.scss';

const PadNameDisplay = ({ isTurnedOn, keyName, keyTrigger }) => (
  <div id="pad-name-display" className={isTurnedOn ? 'active' : ''}>
    <span id="pad-key">{(keyTrigger) ? keyTrigger : '_'}</span>
    <span id="pad-name">{(keyName) ? keyName : 'Press a key ...'}</span>
  </div>
);

PadNameDisplay.propTypes = {
  isTurnedOn: PropTypes.bool.isRequired,
  keyName: PropTypes.string,
  keyTrigger: PropTypes.string,
};

export default PadNameDisplay;
