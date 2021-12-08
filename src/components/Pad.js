import React from 'react';
import './Pad.scss';

const Pad = () => (
  <div id="pad">
    <div id="key-Q" className="drum-pad">
      Q
      <audio id="Q" className="clip" src=""></audio>
    </div>
    <div id="key-W" className="drum-pad">
      W
      <audio id="Q" className="clip" src=""></audio>
    </div>
    <div id="key-E" className="drum-pad">
      E
      <audio id="Q" className="clip" src=""></audio>
    </div>

    <div id="key-A" className="drum-pad">
      A
      <audio id="Q" className="clip" src=""></audio>
    </div>
    <div id="key-S" className="drum-pad">
      S
      <audio id="Q" className="clip" src=""></audio>
    </div>
    <div id="key-D" className="drum-pad">
      D
      <audio id="Q" className="clip" src=""></audio>
    </div>

    <div id="key-Z" className="drum-pad">
      Z
      <audio id="Q" className="clip" src=""></audio>
    </div>
    <div id="key-X" className="drum-pad">
      X
      <audio id="Q" className="clip" src=""></audio>
    </div>
    <div id="key-C" className="drum-pad">
      C
      <audio id="Q" className="clip" src=""></audio>
    </div>
  </div>
);

export default Pad;
