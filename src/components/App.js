import React, { useState, useEffect } from 'react';
import Controls from './molecules/Controls';
import Pad from './molecules/Pad';
import banksData from '../constants';
import './App.scss';

const App = () => {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const [banks, setBanks] = useState(banksData);
  const [activeBank, setActiveBank] = useState(banks[0]);
  const [currentKey, setCurrentKey] = useState(undefined);

  const playKey = (key) => {
    const { keyTrigger } = key;
    const button = document.getElementById(keyTrigger);
    button.currentTime = 0;
    button.play();
  };

  const pressKeyboard = (e) => {
    const { keyCode } = e;
    const key = activeBank.keys.find(key => key.keyCode === keyCode);
    if (key) {
      setCurrentKey(key);
      playKey(key);
    }
  };

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

  const handlePadClick = (key) => {
    if (isTurnedOn) {
      setCurrentKey(key);
      playKey(key);
    }
  };

  useEffect(() => {
    if (isTurnedOn) {
      document.addEventListener('keydown', pressKeyboard);
    }

    return () => document.removeEventListener('keydown', pressKeyboard);
  }, [isTurnedOn]);

  useEffect(() => {
    const updatedBanks = banks.map(bank => {
      return {
        ...bank,
        isActive: isTurnedOn && bank.id === 0,
      };
    });
    setBanks(updatedBanks);
    setCurrentKey(undefined);
  }, [isTurnedOn]);

  useEffect(() => {
    const updatedActiveBank = banks.find(bank => bank.isActive);
    if (updatedActiveBank && updatedActiveBank.id !== activeBank.id) {
      setActiveBank(updatedActiveBank);
      setCurrentKey(undefined);
    }
  }, [banks]);

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
                    bank={activeBank}
                    handlePadClick={handlePadClick}
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
