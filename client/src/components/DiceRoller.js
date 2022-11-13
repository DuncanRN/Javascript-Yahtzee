import React from 'react';

const DiceRoller = ({rollDice, rollsThisTurn}) => {

    const handleClick = function() {
        rollDice();
    };

    if(rollsThisTurn==3){
        return(
            <div className="dice-roller">
                <h2 className='turn-heading'>Turn Complete.</h2>  
                
                <h2 className='end-turn-statement'>
                    End your turn by clicking on a scoresheet category.
                </h2>
            </div>
        );
    }
    else if(rollsThisTurn==0)
    {
        return (
            <>
            <div className='roll-dice-section'>
                <button className="roll-dice-button" onClick={handleClick}>Roll!</button>
            </div>
            
            </>
        );
    }
    else
    {
        return (
            <>
            <div className='roll-dice-section'>
                <button className="roll-dice-button" onClick={handleClick}>Roll!</button>
            </div>
            
            </>
        );
    };
};

export default DiceRoller;