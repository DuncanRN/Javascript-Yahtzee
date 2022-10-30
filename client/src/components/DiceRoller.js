import React from 'react';

// TODO rewrite the return below so it maps? out each dice in currentRoll

// TODO rewrite the return below to include a button which rerolls the dice

// TODO rewrite the return below so we can have an onClick() to lock a specific dice

// TODO if rollsThisTurn = 3 then we are at the end of the turn. don't show the "Roll Dice" button


const DiceRoller = ({rollDice, rollsThisTurn}) => {

    const handleClick = function() {
        rollDice();
    };

    if(rollsThisTurn==3){
        return(
            <div id="dice-roller">
                <h3>Turn Complete.</h3> 
                <p>
                    End your turn by clicking on a scoresheet category.
                </p>
            </div>
        )
    }
    else
    {
        return (
            <div id="dice-roller">
                <button onClick={handleClick}>Roll Dice!</button>
            </div>
        )
    }
}

export default DiceRoller;