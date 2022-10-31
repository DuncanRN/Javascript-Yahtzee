// Keep as much of the game logic in here as we can.

export const calculateCategoryScore = (categoryIDToSet, currentRoll, scores) => {
    // TODO write the big if elseif statement here for all 13 categories

    const arrayOfCurrentRoll=[currentRoll[0], currentRoll[1], currentRoll[2], currentRoll[3], currentRoll[4]]

    if(categoryIDToSet=="1s")
    {
        const thisNumber = 1;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="2s")
    {
        const thisNumber = 2;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="3s")
    {
        const thisNumber = 3;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="4s")
    {
        const thisNumber = 4;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="5s")
    {
        const thisNumber = 5;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="6s")
    {
        const thisNumber = 6;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="Bonus")
    {

        const tempScores = scores.map(score => score);
        const valueOfFirstSixCategories = tempScores[0]+tempScores[1]+tempScores[2]+tempScores[3]+tempScores[4]+tempScores[5];
        
        if(valueOfFirstSixCategories>63){
            console.log("in Bonus if successful");
            console.log(valueOfFirstSixCategories);
            return 35;
        }
        else{
            console.log("in Bonus if failed");
            console.log(valueOfFirstSixCategories);
            return 0;
        }

    }
    else if(categoryIDToSet=="Upper_Total")
    {
        const tempScores = scores.map(score => score);
        const valueOfFirstSevenCategories = tempScores[0]+tempScores[1]+tempScores[2]+tempScores[3]+tempScores[4]+tempScores[5]+tempScores[6];
        return valueOfFirstSevenCategories;

    }



        
    }


}

// TODO another function here to calculate the bonuses
// are there two different bonuses? Needs two different functions?

//Only one bonus - it needs to see the values of the upper score though and total them up.
//If it's >= 63 it should award the bonus of 35. Maybe pass down the state 'scores' and add 
// up the first six values.

