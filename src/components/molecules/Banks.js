import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Banks.scss';

const defaultBanks = [
  {
    id: 0,
    name: 'Bank 1',
    isActive: false,
  },
  {
    id: 1,
    name: 'Bank 2',
    isActive: false,
  }
];

const Banks = ({ isTurnedOn }) => {
  const [banks, setBanks] = useState(defaultBanks);

  const handleClick = (bankId) => {
    const updatedBanks = banks.map(bank => {
      return {
        ...bank,
        isActive: (isTurnedOn && bank.id === bankId) ? true : false,
      };
    });
    setBanks(updatedBanks);
  };

  useEffect(() => {
    const updatedBanks = banks.map(bank => {
      return {
        ...bank,
        isActive: (isTurnedOn && bank.id === 0) ? true : false,
      };
    });
    setBanks(updatedBanks);
  }, [isTurnedOn]);

  return (
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
};

Banks.propTypes = {
  isTurnedOn: PropTypes.bool.isRequired,
};

export default Banks;