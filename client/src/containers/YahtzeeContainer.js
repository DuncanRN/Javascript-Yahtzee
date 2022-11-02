import React from 'react';
import { useEffect, useState } from 'react';

import DiceDisplay from '../components/DiceDisplay';
import DiceRoller from '../components/DiceRoller';
import ScoreSheet from '../components/ScoreSheet';

import YahtzeeService from '../services/YahtzeeService';
import {calculateCategoryScore} from '../services/YahtzeeGameLogic';

import PlayerForm from '../components/PlayerForm';
import {updatePlayer} from '../services/YahtzeeService'; // ADDED

const MainContainer = () => {

const [currentRoll, setCurrentRoll] = useState([null, null, null, null, null])
const [lockedDice, setLockedDice] = useState([false, false, false, false, false])
const [rollsThisTurn, setRollsThisTurn] = useState(0)
const [scores1, setScores1] = useState([null, null, null, null, null,
                                      null, null, null, null, null,
                                      null, null, null]) // thirteen nulls
const [scores2, setScores2] = useState([null, null, null, null, null,
                                      null, null, null, null, null,
                                      null, null, null]) // thirteen nulls
const [scores3, setScores3] = useState([null, null, null, null, null,
                                      null, null, null, null, null,
                                      null, null, null]) // thirteen nulls
const [scores4, setScores4] = useState([null, null, null, null, null,
                                        null, null, null, null, null,
                                        null, null, null]) // thirteen nulls
const [scores5, setScores5] = useState([null, null, null, null, null,
                                          null, null, null, null, null,
                                          null, null, null]) // thirteen nulls
const [scores6, setScores6] = useState([null, null, null, null, null,
                                            null, null, null, null, null,
                                            null, null, null]) // thirteen nulls
                                            
const [currentPlayer, setCurrentPlayer] = useState("Player1");
const [players, setPlayers] = useState(["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"]);

const [playersNames, setPlayersNames] = useState(["Duncan", "Louise",  "Cammy", "Lucy", "Colin", "Matt"]);
const [isEndGame, setIsEndGame] = useState(false);


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

};

const toggleLockDice = (i) => {
  const tempBoolObject = lockedDice
  const tempBoolArray = [tempBoolObject[0], tempBoolObject[1], tempBoolObject[2], tempBoolObject[3], tempBoolObject[4]];
  const bool = !tempBoolObject[i]
  tempBoolArray.splice(i, 1, bool)
  setLockedDice(tempBoolArray)
};

const calculateTotals = (tempScores) => {
  // set scores for Upper Total, Lower Total, and Grand total
  
  if (currentPlayer=="Player1"){
    var scoreToSet=calculateCategoryScore("Upper_Total", currentRoll, tempScores);
    tempScores[7]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Lower_Total", currentRoll, tempScores);
    tempScores[15]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Grand_Total", currentRoll, tempScores);
    tempScores[16]=scoreToSet;
    setScores1(tempScores);

  }

  else if(currentPlayer=="Player2"){
    var scoreToSet=calculateCategoryScore("Upper_Total", currentRoll, tempScores);
    tempScores[7]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Lower_Total", currentRoll, tempScores);
    tempScores[15]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Grand_Total", currentRoll, tempScores);
    tempScores[16]=scoreToSet;
    setScores2(tempScores);
  }

  else if(currentPlayer=="Player3"){
    var scoreToSet=calculateCategoryScore("Upper_Total", currentRoll, tempScores);
    tempScores[7]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Lower_Total", currentRoll, tempScores);
    tempScores[15]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Grand_Total", currentRoll, tempScores);
    tempScores[16]=scoreToSet;
    setScores3(tempScores);
  }
  else if(currentPlayer=="Player4"){
    var scoreToSet=calculateCategoryScore("Upper_Total", currentRoll, tempScores);
    tempScores[7]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Lower_Total", currentRoll, tempScores);
    tempScores[15]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Grand_Total", currentRoll, tempScores);
    tempScores[16]=scoreToSet;
    setScores4(tempScores);
  }
  else if(currentPlayer=="Player5"){
    var scoreToSet=calculateCategoryScore("Upper_Total", currentRoll, tempScores);
    tempScores[7]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Lower_Total", currentRoll, tempScores);
    tempScores[15]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Grand_Total", currentRoll, tempScores);
    tempScores[16]=scoreToSet;
    setScores5(tempScores);
  }
  else if(currentPlayer=="Player6"){
    var scoreToSet=calculateCategoryScore("Upper_Total", currentRoll, tempScores);
    tempScores[7]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Lower_Total", currentRoll, tempScores);
    tempScores[15]=scoreToSet;
    var scoreToSet=calculateCategoryScore("Grand_Total", currentRoll, tempScores);
    tempScores[16]=scoreToSet;
    setScores6(tempScores);
  }
}

const setNextPlayer = () => {
  // function to change to make the next player the active player.
  const playerPosition=players.indexOf(currentPlayer)
  const numberOfPlayers=players.length


  if ((playerPosition+1)==numberOfPlayers){
    setCurrentPlayer(players[0])
  }
  else{
    setCurrentPlayer(players[(playerPosition+1)])
  }
};

const checkEndGame = () => {
  // function to check if we are at the end of the game - last player takes their last turn.
  const numberOfPlayers=players.length
  const playerPosition=players.indexOf(currentPlayer)
  var scoresToUse


  if ((playerPosition+1)==numberOfPlayers) {
    if (currentPlayer=="Player1"){
      scoresToUse = scores1;
    }
    if (currentPlayer=="Player2"){
      scoresToUse = scores2;
    }
    if (currentPlayer=="Player3"){
      scoresToUse = scores3;
    }
    if (currentPlayer=="Player4"){
      scoresToUse = scores4;
    }
    if (currentPlayer=="Player5"){
      scoresToUse = scores5;
    }
    if (currentPlayer=="Player6"){
      scoresToUse = scores6;
    }

    if ((scoresToUse.every(element => element !== null))) {
      console.log("EndGAME")
      setIsEndGame(true)
    };
  };
};

const setScore = (categoryIDToSet) => {
  
  // in here we check if the current player has a score set in this category. 
  // if they do we return an error message. 
  // whereever we're calling setScore - we should catch teh error message and output it!!!

  setRollsThisTurn(0);
  setCurrentRoll([null, null, null, null, null]);
  setLockedDice([false, false, false, false, false]); 
  
  // Duncan wants to ask an instructor about this if there is time.
  // We should be able to just call setLockedDice() and that would 
  // set it to the default values - [false, false, false, false, false]... but that crashes the whole thing down

  // Cammy asks is that not what we're doing there on line 56?

  var scoreToSet = 0;

  if (currentPlayer=="Player1"){

    scoreToSet=calculateCategoryScore(categoryIDToSet, currentRoll, scores1);
  }

  else if(currentPlayer=="Player2"){
    scoreToSet=calculateCategoryScore(categoryIDToSet, currentRoll, scores2);
  }

  else if(currentPlayer=="Player3"){
    scoreToSet=calculateCategoryScore(categoryIDToSet, currentRoll, scores3);
  }

  else if(currentPlayer=="Player4"){
    scoreToSet=calculateCategoryScore(categoryIDToSet, currentRoll, scores4);
  }

  else if(currentPlayer=="Player5"){
    scoreToSet=calculateCategoryScore(categoryIDToSet, currentRoll, scores5);
  }

  else if(currentPlayer=="Player6"){
    scoreToSet=calculateCategoryScore(categoryIDToSet, currentRoll, scores6);
  }


  if(categoryIDToSet=='Bonus') { categoryIDToSet='6'; }

  else if(categoryIDToSet=='Upper_Total') { categoryIDToSet='7'; }

  else if(categoryIDToSet=='Three_of_a_Kind') { categoryIDToSet='8'; }

  else if(categoryIDToSet=='Four_of_a_Kind') { categoryIDToSet='9'; }

  else if(categoryIDToSet=='Full_House') { categoryIDToSet='10'; }

  else if(categoryIDToSet=='Small_Straight') { categoryIDToSet='11'; }

  else if(categoryIDToSet=='Large_Straight') { categoryIDToSet='12'; }

  else if(categoryIDToSet=='Yahtzee') { categoryIDToSet='13'; }

  else if(categoryIDToSet=='Chance') { categoryIDToSet='14'; }



  if (currentPlayer=="Player1"){

    const tempScores = scores1.map(score => score);
    tempScores[categoryIDToSet]=scoreToSet;
  
    setScores1(tempScores);

    calculateTotals(tempScores);
    checkEndGame()
    setNextPlayer()
  }

  else if(currentPlayer=="Player2"){
    const tempScores = scores2.map(score => score);
    tempScores[categoryIDToSet]=scoreToSet;
  
    setScores2(tempScores);

    calculateTotals(tempScores);
    checkEndGame()
    setNextPlayer()
  }

  else if(currentPlayer=="Player3"){
    const tempScores = scores3.map(score => score);
    tempScores[categoryIDToSet]=scoreToSet;
  
    setScores3(tempScores);

    calculateTotals(tempScores);
    checkEndGame()
    setNextPlayer()
  }

  //
  else if(currentPlayer=="Player4"){
    const tempScores = scores4.map(score => score);
    tempScores[categoryIDToSet]=scoreToSet;
  
    setScores4(tempScores);

    calculateTotals(tempScores);
    checkEndGame()
    setNextPlayer()
  }

  else if(currentPlayer=="Player5"){
    const tempScores = scores5.map(score => score);
    tempScores[categoryIDToSet]=scoreToSet;
  
    setScores5(tempScores);

    calculateTotals(tempScores);
    checkEndGame()
    setNextPlayer()
  }

  else if(currentPlayer=="Player6"){
    const tempScores = scores6.map(score => score);
    tempScores[categoryIDToSet]=scoreToSet;
  
    setScores6(tempScores);

    calculateTotals(tempScores);
    checkEndGame()
    setNextPlayer()
  }
};

const getPlayerName = () => {
  const playerNameIndex = players.indexOf(currentPlayer);
  return playersNames[playerNameIndex];
};


  // fix output so it says something like "Louise's Roll, then Louise's 1st Roll"
  var firstSecondThirdOutput="";
  if(rollsThisTurn=='1') { firstSecondThirdOutput=" 1st "; }
  else if(rollsThisTurn=='2') { firstSecondThirdOutput=" 2nd "; }

//ADDED UPDATE FUNCTION -  HAVE TO UPDATE WHOLE PLAYER (BUT WE WILL ONLY ALLOW TO UPDATE NAME)

const updatePlayer = updatedPlayer => {
//   //  (req to server to update booking in DB)
//   YahtzeeService.updatePlayer(updatedPlayer);

// //  (update locally)
//   const updatedPlayerIndex = players.findIndex(player => player._id === updatedPlayer._id);
//   const updatedPlayers = [...players];
//   updatedPlayers[updatedPlayerIndex] = updatedPlayer;
//   setPlayers(updatedPlayers);
};



  return (
      <div className="whole-yahtzee-game">
        <div className="title">
          
        </div>
            
        <div className="game-container">

          {isEndGame ?
          <h2 className="game-over">Game Over!</h2>
          :

            <div className="dice-and-roller">
                <div className="dice-display">
                  <div>
                    {/* <PlayerForm updateName={updatePlayer}/> //PLAYER FORM CALLED */}
                  </div>
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

                    <h2 className='rolls-this-turn'>{getPlayerName()}'s {firstSecondThirdOutput} roll: </h2>

                </div>
            </div>
}

            <div className="score-sheet">
                <ScoreSheet 
                  scores1={scores1}
                  scores2={scores2}
                  scores3={scores3}
                  scores4={scores4}
                  scores5={scores5}
                  scores6={scores6}
                  playersNames={playersNames}
                  currentRoll={currentRoll}

                  setScore={setScore}
                />
            </div>

          </div>
        </div>
  );

};

export default MainContainer;