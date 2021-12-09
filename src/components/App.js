import React from 'react';
import Controls from './molecules/Controls';
import Pad from './molecules/Pad';
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
                <div className="col-4">
                  <Controls />
                </div>
                <div className="col-8">
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
