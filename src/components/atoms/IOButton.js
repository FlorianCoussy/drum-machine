import React from 'react';
import PropTypes from 'prop-types';
import './IOButton.scss';

const IOButton = ({ isTurnedOn, handleClick }) => (
  <div id="io">
    <button onClick={handleClick}>
      <span className={isTurnedOn ? 'active' : ''}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
        Play
      </span>
    </button>
  </div>
);

IOButton.propTypes = {
  isTurnedOn: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IOButton;
