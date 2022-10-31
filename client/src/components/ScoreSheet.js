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
    var output9 = "";
    var output10 = "";
    var output11 = "";
    var output12 = "";
    var output13 = "";
    var output14 = "";
    var output15 = "";

    var buttonclass1 = "buttonScores";
    var buttonclass2 = "buttonScores";
    var buttonclass3 = "buttonScores";
    var buttonclass4 = "buttonScores";
    var buttonclass5 = "buttonScores";
    var buttonclass6 = "buttonScores";
    var buttonclass7 = "buttonScores";
    var buttonclass8 = "buttonScores";
    var buttonclass9 = "buttonScores";
    var buttonclass10 = "buttonScores";
    var buttonclass11 = "buttonScores";
    var buttonclass12 = "buttonScores";
    var buttonclass13 = "buttonScores";
    var buttonclass14 = "buttonScores";
    var buttonclass15 = "buttonScores";
    

    if(tempScores[0]!==null) { output1 = tempScores[0]; buttonclass1="buttonScoresDeactivated"; } // Ones
    if(tempScores[1]!==null) { output2 = tempScores[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores[2]!==null) { output3 = tempScores[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores[3]!==null) { output4 = tempScores[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores[4]!==null) { output5 = tempScores[4]; buttonclass5="buttonScoresDeactivated"; }

    if(tempScores[5]!==null) { output6 = tempScores[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    
    if(tempScores[6]!==null) { output7 = tempScores[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus


    if(tempScores[6]!==null) { output7 = tempScores[6]; buttonclass7="buttonScoresDeactivated"; } // Bonus

    if(tempScores[7]!==null) { output8 = tempScores[7]; buttonclass8="buttonScoresDeactivated"; } // Upper Total
    if(tempScores[8]!==null) { output9 = tempScores[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores[9]!==null) { output10 = tempScores[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores[10]!==null) { output11 = tempScores[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores[11]!==null) { output12 = tempScores[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores[12]!==null) { output13 = tempScores[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight
    if(tempScores[13]!==null) { output14 = tempScores[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores[14]!==null) { output15 = tempScores[14]; buttonclass15="buttonScoresDeactivated"; } // Chance 
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
                <li><button className={buttonclass9} value="Three_of_a_Kind" onClick={handleScoreClick}>Three of a Kind: </button> {output9}</li>
            
                <li><button className={buttonclass10} value="Four_of_a_Kind" onClick={handleScoreClick}>Four of a Kind: </button> {output10}</li>
                <li><button className={buttonclass11} value="Full_House" onClick={handleScoreClick}>Full House: </button> {output11}</li>
                <li><button className={buttonclass12} value="Small_Straight" onClick={handleScoreClick}>Small Straight: </button> {output12}</li>
                <li><button className={buttonclass13} value="Large_Straight" onClick={handleScoreClick}>Large Straight: </button> {output13}</li>
                <li><button className={buttonclass14} value="Yahtzee" onClick={handleScoreClick}>Yahtzee: </button> {output14}</li>
                <li><button className={buttonclass15} value="Chance" onClick={handleScoreClick}>Chance: </button> {output15}</li>
                <li>Lower Total</li>
                <li>Grand Total</li>

            </ul>
        </div>
    )

}

export default ScoreSheet;