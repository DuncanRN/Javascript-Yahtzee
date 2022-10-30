import React from 'react'
import SingleDie from './SingleDie';

const DiceDisplay = ({currentRoll, toggleLockDice}) => {

    const diceNumbers = currentRoll.map((dieNumber, index) => {
      return <SingleDie
      dieNumber={dieNumber}
      key={index}
      index={index}
      
      toggleLockDice={toggleLockDice}/>
    });

  return (
    <div>{diceNumbers}</div>
  );
};

export default DiceDisplay;