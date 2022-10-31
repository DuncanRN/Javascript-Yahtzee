import React from 'react';

const ScoreSheet = ({scores, currentRoll, setScore}) => {

    const handleScoreClick = function(event) {
        setScore(event.target.value);
    };

    // map scores into tempScores
    const tempScores = scores.map(score => score);

    var output1 = "";
    var output2 = "";
    var output3 = "";
    var output4 = "";
    var output5 = "";
    var output6 = "";
    var output7 = "";
    var output8 = "";

    var buttonclass1 = "buttonScores";
    var buttonclass2 = "buttonScores";
    var buttonclass3 = "buttonScores";
    var buttonclass4 = "buttonScores";
    var buttonclass5 = "buttonScores";
    var buttonclass6 = "buttonScores";
    var buttonclass7 = "buttonScores";
    var buttonclass8 = "buttonScores";

    if(tempScores[0]!==null) { output1 = tempScores[0]; buttonclass1="buttonScoresDeactivated"; } // Ones
    if(tempScores[1]!==null) { output2 = tempScores[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores[2]!==null) { output3 = tempScores[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores[3]!==null) { output4 = tempScores[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores[4]!==null) { output5 = tempScores[4]; buttonclass5="buttonScoresDeactivated"; }

    if(tempScores[5]!==null) { output6 = tempScores[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    
    if(tempScores[6]!==null) { output7 = tempScores[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus


    if(tempScores[6]!==null) { output7 = tempScores[6]; buttonclass7="buttonScoresDeactivated"; } // Bonus

    if(tempScores[7]!==null) { output8 = tempScores[7]; buttonclass8="buttonScoresDeactivated"; } // Upper Total

    return (
        <div id="score-sheet">
            <h2>Scoring Categories</h2>
            <ul>
                <li><button className={buttonclass1} value="0" onClick={handleScoreClick}>Ones: </button>{output1}</li>
                <li><button className={buttonclass2}  value="1" onClick={handleScoreClick}>Twos: </button> {output2}</li>
                <li><button className={buttonclass3}  value="2" onClick={handleScoreClick}>Threes: </button> {output3}</li>
                <li><button className={buttonclass4}  value="3" onClick={handleScoreClick}>Fours: </button> {output4}</li>
                <li><button className={buttonclass5}  value="4" onClick={handleScoreClick}>Fives: </button> {output5}</li>
                <li><button className={buttonclass6}  value="5" onClick={handleScoreClick}>Sixes: </button> {output6}</li>
                <li><button className={buttonclass7} value="Bonus" onClick={handleScoreClick}>Bonus: </button> {output7}</li>
                
                <li><button className={buttonclass8} value="Upper_Total" onClick={handleScoreClick}>Upper Total: </button> {output8}</li>
                
                


                <br />
                <li>Three of a Kind</li>
                <li>Four of a Kind</li>
                <li>Full House</li>
                <li>Small Straight</li>
                <li>Large Straight</li>
                <li>Yahtzee</li>
                <li>Chance</li>
                <li>Lower Total</li>
                <li>Grand Total</li>

            </ul>
        </div>
    )

}

export default ScoreSheet;