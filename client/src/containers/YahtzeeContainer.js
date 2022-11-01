import React from 'react';
import { useEffect, useState } from 'react';

import DiceDisplay from '../components/DiceDisplay';
import DiceRoller from '../components/DiceRoller';
import ScoreSheet from '../components/ScoreSheet';

import YahtzeeService from '../services/YahtzeeService';
import {calculateCategoryScore} from '../services/YahtzeeGameLogic';

const MainContainer = () => {

const [currentRoll, setCurrentRoll] = useState([null, null, null, null, null])
const [lockedDice, setLockedDice] = useState([false, false, false, false, false])
const [rollsThisTurn, setRollsThisTurn] = useState(0)
const [scores, setScores] = useState([null, null, null, null, null,
                                      null, null, null, null, null,
                                      null, null, null]) // thirteen nulls

useEffect(() => {
  YahtzeeService.getRolls()
  .then(data => setCurrentRoll(data[0].roll))
}, []);

useEffect(() => {
  calculateTotals()
}, [currentRoll]);

const rollDice = () => {
  const tempDice = currentRoll;
  for (let i = 0; i < lockedDice.length; i++) {
    if (lockedDice[i] === false) {
        const roll = 1 + Math.floor(Math.random() * 6);
        tempDice[i] = roll;
    };
  };

  const tempArray = [tempDice[0], tempDice[1], tempDice[2], tempDice[3], tempDice[4]];
  setCurrentRoll(tempArray);

  YahtzeeService.addRoll(currentRoll);
  setRollsThisTurn(rollsThisTurn+1);

};

const toggleLockDice = (i) => {
  const tempBoolObject = lockedDice
  const tempBoolArray = [tempBoolObject[0], tempBoolObject[1], tempBoolObject[2], tempBoolObject[3], tempBoolObject[4]];
  const bool = !tempBoolObject[i]
  tempBoolArray.splice(i, 1, bool)
  setLockedDice(tempBoolArray)
};

const calculateTotals = () => {
  // set scores for Upper Total, Lower Total, and Grand total
  const tempScores = scores.map(score => score);

  var scoreToSet=calculateCategoryScore("Upper_Total", currentRoll, scores);
  tempScores[7]=scoreToSet;

  var scoreToSet=calculateCategoryScore("Lower_Total", currentRoll, scores);
  tempScores[15]=scoreToSet;

  var scoreToSet=calculateCategoryScore("Grand_Total", currentRoll, scores);
  tempScores[16]=scoreToSet;

  setScores(tempScores);
}

const setScore = (categoryIDToSet) => {
  
  console.log("in setScore function");
  console.log(categoryIDToSet);
  setRollsThisTurn(0);
  setCurrentRoll([null, null, null, null, null]);
  setLockedDice([false, false, false, false, false]); 

  // Duncan wants to ask an instructor about this if there is time.
  // We should be able to just call setLockedDice() and that would 
  // set it to the default values - [false, false, false, false, false]... but that crashes the whole thing down

  //Cammy asks is that not what we're doing there on line 56?

  const scoreToSet=calculateCategoryScore(categoryIDToSet, currentRoll, scores);

  console.log("the score we get back is");
  console.log(scoreToSet);

  // if(categoryIDToSet=='1s') { categoryIDToSet='0'; }
  // else if(categoryIDToSet=='2s') { categoryIDToSet='1'; }
  // else if(categoryIDToSet=='3s') { categoryIDToSet='2'; }
  // else if(categoryIDToSet=='4s') { categoryIDToSet='3'; }
  // else if(categoryIDToSet=='5s') { categoryIDToSet='4'; }
  // else if(categoryIDToSet=='6s') { categoryIDToSet='5'; } Duncan took this out

  if(categoryIDToSet=='Bonus') { categoryIDToSet='6'; }

  else if(categoryIDToSet=='Upper_Total') { categoryIDToSet='7'; }

  else if(categoryIDToSet=='Three_of_a_Kind') { categoryIDToSet='8'; }

  else if(categoryIDToSet=='Four_of_a_Kind') { categoryIDToSet='9'; }

  else if(categoryIDToSet=='Full_House') { categoryIDToSet='10'; }

  else if(categoryIDToSet=='Small_Straight') { categoryIDToSet='11'; }

  else if(categoryIDToSet=='Large_Straight') { categoryIDToSet='12'; }

  else if(categoryIDToSet=='Yahtzee') { categoryIDToSet='13'; }

  else if(categoryIDToSet=='Chance') { categoryIDToSet='14'; }

  const tempScores = scores.map(score => score);
  tempScores[categoryIDToSet]=scoreToSet;

  setScores(tempScores);
};


// TODO function setScore() will take the currentRoll and the categoryID from the category the user has just clicked.
// it will use calculateCategoryScore() which is imported from YahtzeeHelper.js
// it will set that score into the array 'scores' at the position categoryID

// TODO test if the game is over
// if we have scores for every category, the game is over, display final score. 
// Otherwise do the following return


  return (
    <>
      <div className="whole-yahtzee-game">
        <div className="title">
          
        </div>
            
        <div className="game-container">

            <div className="dice-and-roller">
                <div className="dice-display">
                  <ul className='dice-container-display'>
                    <DiceDisplay
                      currentRoll={currentRoll}
                      lockedDice={lockedDice}

                      toggleLockDice={toggleLockDice}
                    />
                  </ul>
                </div>

                <div className="dice-roller-container">
                    <DiceRoller
                        rollsThisTurn={rollsThisTurn}

                        rollDice={rollDice}
                    />

                    <h2 className='rolls-this-turn'>Rolls this turn: {rollsThisTurn}</h2>

                </div>
            </div>

            <div className="score-sheet">
                <ScoreSheet 
                  scores={scores}
                  currentRoll={currentRoll}

                  setScore={setScore}
                />
            </div>

          </div>
        </div>
    </>
  );

};

export default MainContainer;