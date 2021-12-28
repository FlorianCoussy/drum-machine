import React from 'react';
import './Pad.scss';

const Pad = () => (
  <div id="pad">
    <div id="key-Q" className="drum-pad">
      <button className="cyan">
        <span>Q</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>
    <div id="key-W" className="drum-pad">
      <button className="cyan">
        <span>W</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>
    <div id="key-E" className="drum-pad">
      <button className="cyan">
        <span>E</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>

    <div id="key-A" className="drum-pad">
      <button className="purple">
        <span>A</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>
    <div id="key-S" className="drum-pad">
      <button className="purple">
        <span>S</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>
    <div id="key-D" className="drum-pad">
      <button className="purple">
        <span>D</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>

    <div id="key-Z" className="drum-pad">
      <button className="blue">
        <span>Z</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>
    <div id="key-X" className="drum-pad">
      <button className="blue">
        <span>X</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>
    <div id="key-C" className="drum-pad">
      <button className="blue">
        <span>C</span>
        <audio id="Q" className="clip" src=""></audio>
      </button>
    </div>

  </div>
);

export default Pad;
