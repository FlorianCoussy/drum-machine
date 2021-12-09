import React, { useState } from 'react';
import './IOButton.scss';

const IOButton = () => {
  const [isPlayOn, setIsPlayOn] = useState(false);

  const handleClick = () => setIsPlayOn(!isPlayOn);

  const play = (
    <span className='play'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
      </svg>
      Play
    </span>
  );

  const stop = (
    <span className='stop'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-fill" viewBox="0 0 16 16">
        <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
      </svg>
      Stop
    </span>
  );

  return (
    <div id="io">
      <button onClick={handleClick}>
        {isPlayOn ? stop : play}
      </button>
    </div>
  );
};

export default IOButton;
