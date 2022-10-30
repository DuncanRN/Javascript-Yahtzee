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

useEffect(() => {
  YahtzeeService.getRolls()
  .then(data => setCurrentRoll(data[0].roll))
}, []);


// TODO function rollDice() - will use currentRoll & lockedDice. Those don't need passed in since they are states
// remember to increase rollsThisTurn by 1 after we roll
// remember to pass rollDice down to DiceRoller component

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

  console.log("Dice rolled")
  console.log(currentRoll)
};

// TODO function lockDice(dicePos) - toggles the boolean value at position 'dicePos' in the state array lockedDice
// remember to pass this down to the DiceRoller component

// TODO function setScore() will take the currentRoll and the categoryID from the category the user has just clicked.
// it will use calculateCategoryScore() which is imported from YahtzeeHelper.js
// it will set that score into the array 'scores' at the position categoryID
  return (
    <>
    <div>This is the Main Container! Renamed to YahtzeeContainer. <br/>I like to hold states.</div>

    <div><DiceRoller
    rollDice={rollDice}/>
    </div>
    <div><DiceDisplay
    currentRoll={currentRoll}/>
    </div>
    <div><ScoreSheet /></div>
    </>
  );
  // TODO : DiceRoller in the return needs to take arguements - currentRoll and rollsThisTurn

  // TODO : ScoreSheet in the return needs to take arguements - scores and currentRoll


};

export default MainContainer;