import React from 'react';
import PropTypes from 'prop-types';
import './Pad.scss';

const Pad = ({ isTurnedOn, bank, handlePadClick }) => (
  <div id="pad" className={isTurnedOn ? 'active' : ''}>
    {bank.keys.map((key, i) => (
      <div key={key.id} className="drum-pad">
        <button
          className={(i > 5) ? 'blue' : (i > 2) ? 'purple' : 'cyan'}
          onClick={() => handlePadClick(key)}
        >
          <span>{key.keyTrigger}</span>
          <audio id={key.keyTrigger} className="clip" src={key.url}></audio>
        </button>
      </div>
    ))}
  </div>
);

Pad.propTyoes = {
  isTurnedOn: PropTypes.bool.isRequired,
  bank: PropTypes.object.isRequired,
  handlePadClick: PropTypes.func.isRequired,
};

export default Pad;
