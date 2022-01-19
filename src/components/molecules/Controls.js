import React from 'react';
import PropTypes from 'prop-types';
import IOButton from '../atoms/IOButton';
import PadNameDisplay from '../atoms/PadNameDisplay';
import VolumeSlider from '../atoms/VolumeSlider';
import Banks from './Banks';
import './Controls.scss';

const Controls = ({
  isTurnedOn,
  banks,
  currentKey,
  handleIOButtonClick,
  handleBanksClick
}) => (
  <div id="controls">
    <div>
      <div id="logo">&copy; MASCHINE</div>
      <IOButton
        isTurnedOn={isTurnedOn}
        handleClick={handleIOButtonClick}
      />
    </div>
    <PadNameDisplay
      isTurnedOn={isTurnedOn}
      keyName={currentKey ? currentKey.id : undefined}
      keyTrigger={currentKey ? currentKey.keyTrigger : undefined}
    />
    <VolumeSlider isTurnedOn={isTurnedOn} />
    <Banks
      banks={banks}
      handleClick={handleBanksClick}
    />
  </div>
);

Controls.propTypes = {
  isTurnedOn: PropTypes.bool.isRequired,
  banks: PropTypes.array.isRequired,
  currentKey: PropTypes.object,
  handleIOButtonClick: PropTypes.func.isRequired,
  handleBanksClick: PropTypes.func.isRequired,
};

export default Controls;
