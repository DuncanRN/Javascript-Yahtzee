import React from 'react';

// TODO rewrite the return below so it maps? out each dice in currentRoll

// TODO rewrite the return below to include a button which rerolls the dice

// TODO rewrite the return below so we can have an onClick() to lock a specific dice

// TODO if rollsThisTurn = 3 then we are at the end of the turn. don't show the "Roll Dice" button


const DiceRoller = ({rollDice}) => {

    const handleClick = function() {
        rollDice();
      };

    return (
        <div id="dice-roller">
            <button onClick={handleClick}>Roll Dice!</button>
        </div>
    )

}

export default DiceRoller;