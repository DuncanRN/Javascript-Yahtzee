// Keep as much of the game logic in here as we can.

export const calculateCategoryScore = (categoryIDToSet, currentRoll, scores) => {

    const arrayOfCurrentRoll=[currentRoll[0], currentRoll[1], currentRoll[2], currentRoll[3], currentRoll[4]]

    if(categoryIDToSet=="0")
    {
        const thisNumber = 1;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="1")
    {
        const thisNumber = 2;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="2")
    {
        const thisNumber = 3;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="3")
    {
        const thisNumber = 4;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="4")
    {
        const thisNumber = 5;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="5")
    {
        const thisNumber = 6;
        const arrayOfAllThisNumber = arrayOfCurrentRoll.filter(roll => roll == thisNumber);
        const score = (arrayOfAllThisNumber.length * thisNumber)
        return score;
    }
    else if(categoryIDToSet=="6") // Bonus
    {

        const tempScores = scores.map(score => score);
        const valueOfFirstSixCategories = tempScores[0]+tempScores[1]+tempScores[2]+tempScores[3]+tempScores[4]+tempScores[5];
        
        if(valueOfFirstSixCategories>63){
            return 35;
        }
        else{
            return 0;
        }

    }
    else if(categoryIDToSet=="7") // Upper_Total
    {
        const tempScores = scores.map(score => score);
        const valueOfFirstSevenCategories = tempScores[0]+tempScores[1]+tempScores[2]+tempScores[3]+tempScores[4]+tempScores[5]+tempScores[6];
        return valueOfFirstSevenCategories;

    }

    else if(categoryIDToSet=="8") // Three of a Kind
    { 
        var numberIncidences = arrayOfCurrentRoll.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
        }, {});
        if (numberIncidences[1] >= 3 || numberIncidences[2] >= 3 || numberIncidences[3] >= 3 || numberIncidences[4] >= 3 || numberIncidences[5] >= 3 || numberIncidences[6] >= 3) {
            return(arrayOfCurrentRoll[0] + arrayOfCurrentRoll[1] + arrayOfCurrentRoll[2] + arrayOfCurrentRoll[3] + arrayOfCurrentRoll[4])
        }
        else {return 0}

    }

    else if(categoryIDToSet=="9") // Four_of_a_Kind
    { 
        var numberIncidences = arrayOfCurrentRoll.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
        }, {});
        if (numberIncidences[1] >= 4 || numberIncidences[2] >= 4 || numberIncidences[3] >= 4 || numberIncidences[4] >= 4 || numberIncidences[5] >= 4 || numberIncidences[6] >= 4) {
            return(arrayOfCurrentRoll[0] + arrayOfCurrentRoll[1] + arrayOfCurrentRoll[2] + arrayOfCurrentRoll[3] + arrayOfCurrentRoll[4])
        }
        else {return 0}

    }

    else if(categoryIDToSet=="10") // Full_House
    { 
        var numberIncidences = arrayOfCurrentRoll.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
        }, {});
        if (numberIncidences[1] == 3 || numberIncidences[2] == 3 || numberIncidences[3] == 3 || numberIncidences[4] == 3 || numberIncidences[5] == 3 || numberIncidences[6] == 3) {
            if (numberIncidences[1] == 2 || numberIncidences[2] == 2 || numberIncidences[3] == 2 || numberIncidences[4] == 2 || numberIncidences[5] == 2 || numberIncidences[6] == 2){
                return 25;
            }
            return 0;
        }
        else {return 0}
    }

    else if(categoryIDToSet=="11") // Small_Straight
    { 
        var numberIncidences = arrayOfCurrentRoll.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
        }, {});
        if (numberIncidences[1] >= 1 && numberIncidences[2] >=1 && numberIncidences[3] >=1 && numberIncidences[4] >=1){
            return 30;
        }
        if (numberIncidences[2] >=1 && numberIncidences[3] >=1 && numberIncidences[4] >=1 && numberIncidences[5] >= 1 ){
            return 30;
        }
        if (numberIncidences[3] >=1 && numberIncidences[4] >=1 && numberIncidences[5] >= 1 && numberIncidences[6] >=1){
            return 30;
        }
        return 0;
    }

    else if(categoryIDToSet=="12") //Large_Straight
    { 
        var numberIncidences = arrayOfCurrentRoll.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
        }, {});
        if (numberIncidences[1] >= 1 && numberIncidences[2] >=1 && numberIncidences[3] >=1 && numberIncidences[4] >=1 && numberIncidences[5] >=1){
            return 40
        }
        if (numberIncidences[2] >=1 && numberIncidences[3] >=1 && numberIncidences[4] >=1 && numberIncidences[5] >= 1 && numberIncidences[6] >= 1){
            return 40
        }
        return 0
    }

    else if(categoryIDToSet=="13") // Yahtzee
    { 
        var numberIncidences = arrayOfCurrentRoll.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
        }, {});
        if (numberIncidences[1] == 5 || numberIncidences[2] == 5 || numberIncidences[3] == 5 || numberIncidences[4] == 5 || numberIncidences[5] == 5 || numberIncidences[6] == 5)
        {
            return 50
        }
        return 0
    }

    else if(categoryIDToSet=="14") // Chance
    {
        const total = arrayOfCurrentRoll[0] + arrayOfCurrentRoll[1] + arrayOfCurrentRoll[2] + arrayOfCurrentRoll[3] + arrayOfCurrentRoll[4]
        return total;
    }

    else if(categoryIDToSet=="15") // Lower_Total
    {
        const tempScores = scores.map(score => score);

        var valueOfAllCategories=0;

        for (let i = 8; i < 15; i++) {
            if (tempScores[i] != null) {
                valueOfAllCategories=valueOfAllCategories+ tempScores[i];
            };
        };
        return valueOfAllCategories;

    }

    else if(categoryIDToSet=="16") // Grand_Total
    {
        const tempScores = scores.map(score => score);
        var scoreForGrandTotal=0;

        for (let i = 8; i < 15; i++) {
            if (tempScores[i] != null) {
                scoreForGrandTotal=scoreForGrandTotal+ tempScores[i];
            };
        };
        
        for (let i = 0; i < 6; i++) {
            if (tempScores[i] != null) {
                scoreForGrandTotal=scoreForGrandTotal+ tempScores[i];
            };
        };
        

        return scoreForGrandTotal;

    }

}