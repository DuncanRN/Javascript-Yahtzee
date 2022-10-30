import React from 'react';
import { useEffect, useState } from 'react'
import DiceDisplay from '../components/DiceDisplay';
import DiceRoller from '../components/DiceRoller';
import ScoreSheet from '../components/ScoreSheet';
import YahtzeeService from '../services/YahtzeeService';

const MainContainer = () => {

// TODO setup States here
// required states - scores
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

  console.log("Dice rolled") // Can be removed!
  console.log(currentRoll)  //Can be removed!
};

const toggleLockDice = (i) => {
  const tempBoolObject = lockedDice
  const tempBoolArray = [tempBoolObject[0], tempBoolObject[1], tempBoolObject[2], tempBoolObject[3], tempBoolObject[4]];
  const bool = !tempBoolObject[i]
  tempBoolArray.splice(i, 1, bool)
  setLockedDice(tempBoolArray)
};

const setScore = (i) => {
  // TODO still have to actually set the score here

  console.log("in setScore function");
  console.log(i);
  setRollsThisTurn(0);
  setCurrentRoll([null, null, null, null, null]);
  setLockedDice([false, false, false, false, false]); 

  // Duncan wants to ask an instructor about this if there is time.
  // We should be able to just call setLockedDice() and that would 
  // set it to the default values - [false, false, false, false, false]... but that crashes the whole thing down


};


// TODO function setScore() will take the currentRoll and the categoryID from the category the user has just clicked.
// it will use calculateCategoryScore() which is imported from YahtzeeHelper.js
// it will set that score into the array 'scores' at the position categoryID
  return (
    <>
    <div>This is the Main Container! Renamed to YahtzeeContainer. <br/>I like to hold states.
    rollsThisTurn - {rollsThisTurn}

    </div>

    <div>
        <DiceRoller
            rollDice={rollDice}
            rollsThisTurn={rollsThisTurn}
        />
    </div>
    <div>
      <ul>
        <DiceDisplay
          currentRoll={currentRoll}
          toggleLockDice={toggleLockDice}
          lockedDice={lockedDice}
          />
      </ul>
    </div>
    <div>
        <ScoreSheet 
          scores={scores}
          currentRoll={currentRoll}
          setScore={setScore}
          />
    </div>
    </>
  );
  // TODO : DiceRoller in the return needs to take arguements - currentRoll and rollsThisTurn

  // TODO : ScoreSheet in the return needs to take arguements - scores and currentRoll


};

export default MainContainer;