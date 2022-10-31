import React from 'react'
import SingleDie from './SingleDie';

const DiceDisplay = ({currentRoll, toggleLockDice, lockedDice}) => {

    const diceNumbers = currentRoll.map((dieNumber, index) => { 
      return (
                <li>
                  <SingleDie
                    dieNumber={dieNumber}
                    key={index}
                    index={index}
                    
                    toggleLockDice={toggleLockDice}
                    isThisDiceLocked={lockedDice[index]}
                    
                    />
                </li>
      );
    });

  return (
    <div>
        <ul className='dice-display'>
          {diceNumbers}
        </ul>
    </div>
  );
};

export default DiceDisplay;