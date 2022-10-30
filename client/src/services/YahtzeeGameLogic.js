// Keep as much of the game logic in here as we can.

export const calculateCategoryScore = (categoryIDToSet, currentRoll) => {
    // TODO write the big if elseif statement here for all 13 categories

    const arrayOfCurrentRoll=[currentRoll[0], currentRoll[1], currentRoll[2], currentRoll[3], currentRoll[4] ]

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
}

// TODO another function here to calculate the bonuses
// are there two different bonuses? Needs two different functions?