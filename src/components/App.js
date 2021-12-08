import React from 'react';
import Controls from './Controls';
import Pad from './Pad';
import './App.scss';

const App = () => {
  return (
    <div>
      <h1>Drum Maschine</h1>
      <div id="scene">
        <div id="drum-machine">
          <div id="display" className="box-face box-face-front">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Controls />
                </div>
                <div className="col">
                  <Pad />
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
