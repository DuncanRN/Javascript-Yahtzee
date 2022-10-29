import React from 'react';
import { useEffect, useState } from 'react'
import DiceRoller from '../components/DiceRoller';
import ScoreSheet from '../components/ScoreSheet';
import { calculateCategoryScore } from '../helpers/YahtzeeHelper'

// TODO setup States here
// required states - scores, currentRoll, lockedDice, rollsThisTurn

// TODO function rollDice() - will use currentRoll & lockedDice. Those don't need passed in since they are states
// remember to increase rollsThisTurn by 1 after we roll
// remember to pass rollDice down to DiceRoller component

// TODO function lockDice(dicePos) - toggles the boolean value at position 'dicePos' in the state array lockedDice
// remember to pass this down to the DiceRoller component

// TODO function setScore() will take the currentRoll and the categoryID from the category the user has just clicked.
// it will use calculateCategoryScore() which is imported from YahtzeeHelper.js
// it will set that score into the array 'scores' at the position categoryID





const MainContainer = () => {
  return (
    <>
    <div>This is the Main Container! Renamed to YahtzeeContainer. <br/>I like to hold states.</div>

    <div><DiceRoller /></div>
    <div><ScoreSheet /></div>
    </>
  );
  // TODO : DiceRoller in the return needs to take arguements - currentRoll and rollsThisTurn

  // TODO : ScoreSheet in the return needs to take arguements - scores and currentRoll


};

export default MainContainer;