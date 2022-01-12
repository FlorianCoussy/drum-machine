import React from 'react';
import PropTypes from 'prop-types';
import './Banks.scss';

const Banks = ({ banks, handleClick }) => (
  <div id="banks">
    {banks.map(bank => (
      <div className="bank" key={`bank-${bank.id}`}>
        <button
          className={bank.isActive ? 'active' : ''}
          onClick={() => handleClick(bank.id)}
        >
          <span>{bank.name}</span>
        </button>
      </div>
    ))}
  </div>
);

Banks.propTypes = {
  banks: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Banks;