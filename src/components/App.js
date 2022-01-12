import React, { useState, useEffect } from 'react';
import Controls from './molecules/Controls';
import Pad from './molecules/Pad';
import banksData from '../constants';
import './App.scss';

const App = () => {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const [banks, setBanks] = useState(banksData);
  const [currentKey, setCurrentKey] = useState(undefined);

  const handleIOButtonClick = () => setIsTurnedOn(!isTurnedOn);

  const handleBanksClick = (bankId) => {
    const updatedBanks = banks.map(bank => {
      return {
        ...bank,
        isActive: isTurnedOn && bank.id === bankId,
      };
    });
    setBanks(updatedBanks);
  };

  useEffect(() => {
    const updatedBanks = banks.map(bank => {
      return {
        ...bank,
        isActive: isTurnedOn && bank.id === 0,
      };
    });
    setBanks(updatedBanks);
  }, [isTurnedOn]);

  return (
    <div>
      <h1>Drum Maschine</h1>
      <div id="scene">
        <div id="drum-machine">
          <div id="display" className="box-face box-face-front">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Controls
                    isTurnedOn={isTurnedOn}
                    banks={banks}
                    currentKey={currentKey}
                    handleIOButtonClick={handleIOButtonClick}
                    handleBanksClick={handleBanksClick}
                  />
                </div>
                <div className="col-8">
                  <Pad
                    isTurnedOn={isTurnedOn}
                    banks={banks}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="box-face box-face-back" />
          <div className="box-face box-face-right" />
          <div className="box-face box-face-left" />
          <div className="box-face box-face-top" />
          <div className="box-face box-face-bottom" />
        </div>
        <div id="shadow" />
      </div>
    </div>
  );
};

export default App;
