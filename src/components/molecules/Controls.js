import React from 'react';
import IOButton from '../atoms/IOButton';
import './Controls.scss';

const Controls = () => (
  <div id="controls">
    <div>
      <div id="logo">&copy; MASCHINE</div>
      <IOButton />
    </div>
    <div id="pad-name-display">Pad Name Display</div>
    <div id="volume-slider">Volume Slider</div>
    <div>
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
);

export default Controls;
