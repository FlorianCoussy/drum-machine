import React from 'react';
import './Pad.scss';

const Pad = () => (
  <div id="pad">
    <div className="container">
      <div className="row">
        <div id="key-Q" className="drum-pad col">
          <button>
            Q
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
        <div id="key-W" className="drum-pad col">
          <button>
            W
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
        <div id="key-E" className="drum-pad col">
          <button>
            E
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
      </div>

      <div className="row">
        <div id="key-A" className="drum-pad col">
          <button>
            A
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
        <div id="key-S" className="drum-pad col">
          <button>
            S
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
        <div id="key-D" className="drum-pad col">
          <button>
            D
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
      </div>
      <div className="row">
        <div id="key-Z" className="drum-pad col">
          <button>
            Z
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
        <div id="key-X" className="drum-pad col">
          <button>
            X
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
        <div id="key-C" className="drum-pad col">
          <button>
            C
            <audio id="Q" className="clip" src=""></audio>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Pad;
