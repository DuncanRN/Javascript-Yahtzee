import React from 'react';

const SingleDice = ({dieNumber, toggleLockDice, index}) => {

    const handleClick = function() {
        toggleLockDice(index);
    };



  return (
    <div onClick={handleClick}>{dieNumber}</div>
  );
};

export default SingleDice;