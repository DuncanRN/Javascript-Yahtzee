import React from 'react';

// TODO if rollsThisTurn = 3 then we are at the end of the turn. don't show the "Roll Dice" button


const DiceRoller = ({
    rollDice,
    endTurn,
    rollsThisTurn
    }) => {

    const handleClick = function() {
        rollDice();
      };

    const handleEndTurn = function() {
        endTurn();
    }

    return (
        <>
        <div>{
        rollsThisTurn < 3 ?
        <div id="dice-roller">
            <button onClick={handleClick}>Roll Dice!</button>
        </div> 
        :
        <button onClick={handleEndTurn}>End Turn</button>
        }
        </div>
        </>
    )

}

export default DiceRoller;