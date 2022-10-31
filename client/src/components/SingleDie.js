import React from 'react';

const SingleDice = ({dieNumber, toggleLockDice, index, isThisDiceLocked}) => {

    const handleClick = function() {
        toggleLockDice(index);
    };

  let lockedOrUnlockedClass=""
  if (isThisDiceLocked==true) {lockedOrUnlockedClass="locked"; }
  else {lockedOrUnlockedClass="unlocked"; }

  var thisDiceImage = "./img/blank.png"; // this is the initial default dice - a blank face

  if (dieNumber==1) { thisDiceImage = "./img/0.png"; }
  else if (dieNumber==2) { thisDiceImage = "./img/1.png"; }
  else if (dieNumber==3) { thisDiceImage = "./img/2.png"; }
  else if (dieNumber==4) { thisDiceImage = "./img/3.png"; }
  else if (dieNumber==5) { thisDiceImage = "./img/4.png"; }
  else if (dieNumber==6) { thisDiceImage = "./img/5.png"; }

  return (
    
    <div onClick={handleClick}  className={lockedOrUnlockedClass}> 
    <img width="40" height="40" src={require(`${thisDiceImage}`)} /> 
    </div>
  );
};

export default SingleDice;