import React from 'react';
import './Controls.scss';

const Controls = () => (
  <div id="controls">
    <div>
      <div id="logo">&copy; MASCHINE</div>
      <div id="io">
        <button>I/O</button>
      </div>
    </div>
    <div id="pad-name-display">Pad Name Display</div>
    <div id="volume-slider">Volume Slider</div>
    <div>
      <div className="bank">
        <button>
          Bank 1
        </button>
      </div>
      <div className="bank">
        <button>
          Bank 2
        </button>
      </div>
    </div>
  </div>
);

export default Controls;
