import React, { useState } from 'react';
import IOButton from '../atoms/IOButton';
import PadNameDisplay from '../atoms/PadNameDisplay';
import VolumeSlider from '../atoms/VolumeSlider';
import './Controls.scss';

const Controls = () => {
  const [isTurnedOn, setIsTurnedOn] = useState(false);

  const handleIOButtonClick = () => setIsTurnedOn(!isTurnedOn);

  return (
    <div id="controls">
      <div>
        <div id="logo">&copy; MASCHINE</div>
        <IOButton isTurnedOn={isTurnedOn} handleClick={handleIOButtonClick} />
      </div>
      <PadNameDisplay />
      <VolumeSlider />
      <div className="banks">
        <div className="bank">
          <button>
            <span>Bank 1</span>
          </button>
        </div>
        <div className="bank">
          <button>
            <span>Bank 2</span>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Controls;
