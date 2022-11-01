import React from 'react';

// TODO rewrite the return below so it maps? out each dice in currentRoll

// TODO rewrite the return below to include a button which rerolls the dice

// TODO rewrite the return below so we can have an onClick() to lock a specific dice

// TODO if rollsThisTurn = 3 then we are at the end of the turn. don't show the "Roll Dice" button


const DiceRoller = ({rollDice, rollsThisTurn}) => {

    const handleClick = function() {
        rollDice();
    };

    if(rollsThisTurn==1){
        return(
            <div className="dice-roller">
                <h2 className='turn-heading'>Turn Complete.</h2>  
                
                <h2 className='end-turn-statement'>
                    End your turn by clicking on a scoresheet category.
                </h2>
            </div>
        );
    }
    else
    {
        return (
            <>
            <div className='roll-dice-section'>
                <button className="roll-dice-button" onClick={handleClick}>Roll!</button>
            </div>
            <div>
                <h2 className='roll-the-dice-statement'>Roll the dice to start the game!</h2>
            </div>
            </>
        );
    };
};

export default DiceRoller;