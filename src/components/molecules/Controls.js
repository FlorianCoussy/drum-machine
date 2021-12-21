import React, { useState } from 'react';
import IOButton from '../atoms/IOButton';
import PadNameDisplay from '../atoms/PadNameDisplay';
import VolumeSlider from '../atoms/VolumeSlider';
import Banks from './Banks';
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
      <PadNameDisplay isTurnedOn={isTurnedOn} />
      <VolumeSlider isTurnedOn={isTurnedOn} />
      <Banks isTurnedOn={isTurnedOn} />
    </div>
  )
};

export default Controls;
