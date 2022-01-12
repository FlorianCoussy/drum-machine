import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Pad.scss';

const Pad = ({ isTurnedOn, banks }) => {
  const [activeBank, setActiveBank] = useState(banks[0]);

  useEffect(() => {
    // const [updatedActiveBank] = banks.filter(bank => bank.isActive);
    // setActiveBank(updatedActiveBank);
  }, [banks]);

  return (
    <div id="pad" className={isTurnedOn ? 'active' : ''}>
      {activeBank.keys.map(({ id, keyTrigger, url }, i) => (
        <div key={id} className="drum-pad">
          <button className={(i > 5) ? 'blue' : (i > 2) ? 'purple' : 'cyan'}>
            <span>{keyTrigger}</span>
            <audio id={keyTrigger} className="clip" src={url}></audio>
          </button>
        </div>
      ))}
    </div>
  );
};

Pad.propTyoes = {
  isTurnedOn: PropTypes.bool.isRequired,
  banks: PropTypes.array.isRequired,
};

export default Pad;
