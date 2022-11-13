// output should look like
//<tr><td><button className={buttonclass1} id="0" value="0" onClick={handleScoreClick} >Ones:</button></td><td>{outputP1_1}</td><td>{outputP2_1}</td><td>{outputP3_1}</td><td>{outputP4_1}</td><td>{outputP5_1}</td><td>{outputP6_1}</td></tr>
                    
import React from 'react';

const ScoreCategoryTr = ({categoryId, tempScores1, tempScores2, tempScores3, tempScores4, tempScores5, tempScores6, setScore}) => {

    let errorMessage;

    const handleScoreClick = function(event) {
        errorMessage = setScore(event.target.value);
        // event.currentTarget.disabled = true;
    };

    let categoryTitle="";

    switch(categoryId) {
        case "0":
            categoryTitle="Ones";
            break;
        case "1":
            categoryTitle="Twos";
            break;
        case "2":
            categoryTitle="Threes";
            break;
        case "3":
            categoryTitle="Fours";
            break;
        case "4":
            categoryTitle="Fives";
            break;
        case "5":
            categoryTitle="Sixes";
            break;
        case "6":
            categoryTitle="Bonus";
            break;   
        case "7":
            categoryTitle="Lower Total";
            break;   
        case "8":
            categoryTitle="Three of a Kind";
            break;   
        case "9":
            categoryTitle="Four of a Kind";
            break;   
        case "10":
            categoryTitle="Full House";
            break; 
        case "11":
            categoryTitle="Small Straight";
            break; 
        case "12":
            categoryTitle="Large Straight";
            break;   
        case "13":
            categoryTitle="Yahtzee";
            break;   
        case "14":
            categoryTitle="Chance";
            break; 
        case "15":
            categoryTitle="Lower Total";
            break;         
        case "16":
            categoryTitle="Grand Total";
            break;                                                
        default:
            categoryTitle="DEFAULT";
    }

    return(
        <>
        <tr><td><button className="buttonScores" id={categoryId} value={categoryId} onClick={handleScoreClick} >{categoryTitle}:</button></td><td>{tempScores1[categoryId]}</td><td>{tempScores2[categoryId]}</td><td>{tempScores3[categoryId]}</td><td>{tempScores4[categoryId]}</td><td>{tempScores5[categoryId]}</td><td>{tempScores6[categoryId]}</td></tr>
        </>
    );

}


export default ScoreCategoryTr;