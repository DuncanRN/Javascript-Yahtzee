import React from 'react';

const ScoreSheet = ({scores1, scores2, currentRoll, setScore}) => {

    const handleScoreClick = function(event) {
        setScore(event.target.value);
        // event.currentTarget.disabled = true;
    };

    // map scores into tempScores
    const tempScores1 = scores1.map(score => score);
    const tempScores2 = scores2.map(score => score);

    var outputP1_1 = "";
    var outputP1_2 = "";
    var outputP1_3 = "";
    var outputP1_4 = "";
    var outputP1_5 = "";
    var outputP1_6 = "";
    var outputP1_7 = "";
    var outputP1_8 = "";
    var outputP1_9 = "";
    var outputP1_10 = "";
    var outputP1_11 = "";
    var outputP1_12 = "";
    var outputP1_13 = "";
    var outputP1_14 = "";
    var outputP1_15 = "";
    var outputP1_16 = "";
    var outputP1_17 = "";

    var outputP2_1 = "";
    var outputP2_2 = "";
    var outputP2_3 = "";
    var outputP2_4 = "";
    var outputP2_5 = "";
    var outputP2_6 = "";
    var outputP2_7 = "";
    var outputP2_8 = "";
    var outputP2_9 = "";
    var outputP2_10 = "";
    var outputP2_11 = "";
    var outputP2_12 = "";
    var outputP2_13 = "";
    var outputP2_14 = "";
    var outputP2_15 = "";
    var outputP2_16 = "";
    var outputP2_17 = "";

    

    var buttonclass1 = "buttonScores";
    var buttonclass2 = "buttonScores";
    var buttonclass3 = "buttonScores";
    var buttonclass4 = "buttonScores";
    var buttonclass5 = "buttonScores";
    var buttonclass6 = "buttonScores";
    var buttonclass7 = "buttonScores";
    var buttonclass9 = "buttonScores";
    var buttonclass10 = "buttonScores";
    var buttonclass11 = "buttonScores";
    var buttonclass12 = "buttonScores";
    var buttonclass13 = "buttonScores";
    var buttonclass14 = "buttonScores";
    var buttonclass15 = "buttonScores";


    if(tempScores1[0]!==null) { outputP1_1 = tempScores1[0]; buttonclass1="buttonScoresDeactivated";  } // Ones
    if(tempScores1[1]!==null) { outputP1_2 = tempScores1[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores1[2]!==null) { outputP1_3 = tempScores1[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores1[3]!==null) { outputP1_4 = tempScores1[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores1[4]!==null) { outputP1_5 = tempScores1[4]; buttonclass5="buttonScoresDeactivated"; }
    if(tempScores1[5]!==null) { outputP1_6 = tempScores1[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    if(tempScores1[6]!==null) { outputP1_7 = tempScores1[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus
    if(tempScores1[7]!==null) { outputP1_8 = tempScores1[7];} // Upper Total
    
    if(tempScores1[8]!==null) { outputP1_9 = tempScores1[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores1[9]!==null) { outputP1_10 = tempScores1[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores1[10]!==null) { outputP1_11 = tempScores1[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores1[11]!==null) { outputP1_12 = tempScores1[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores1[12]!==null) { outputP1_13 = tempScores1[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight
    if(tempScores1[13]!=null) { outputP1_14 = tempScores1[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores1[14]!=null) { outputP1_15 = tempScores1[14]; buttonclass15="buttonScoresDeactivated"; } // Chance
    
    if(tempScores1[15]!==null) { outputP1_16 = tempScores1[15]; } // Lower Total
    if(tempScores1[16]!==null) { outputP1_17 = tempScores1[16]; } // Grand Total  


    //P2
    if(tempScores2[0]!==null) { outputP2_1 = tempScores2[0]; buttonclass1="buttonScoresDeactivated";  } // Ones
    if(tempScores2[1]!==null) { outputP2_2 = tempScores2[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores2[2]!==null) { outputP2_3 = tempScores2[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores2[3]!==null) { outputP2_4 = tempScores2[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores2[4]!==null) { outputP2_5 = tempScores2[4]; buttonclass5="buttonScoresDeactivated"; }
    if(tempScores2[5]!==null) { outputP2_6 = tempScores2[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    if(tempScores2[6]!==null) { outputP2_7 = tempScores2[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus
    if(tempScores2[7]!==null) { outputP2_8 = tempScores2[7];} // Upper Total
    
    if(tempScores2[8]!==null) { outputP2_9 = tempScores2[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores2[9]!==null) { outputP2_10 = tempScores2[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores2[10]!==null) { outputP2_11 = tempScores2[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores2[11]!==null) { outputP2_12 = tempScores2[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores2[12]!==null) { outputP2_13 = tempScores2[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight
    if(tempScores2[13]!=null) { outputP2_14 = tempScores2[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores2[14]!=null) { outputP2_15 = tempScores2[14]; buttonclass15="buttonScoresDeactivated"; } // Chance
    
    if(tempScores2[15]!==null) { outputP2_16 = tempScores2[15]; } // Lower Total
    if(tempScores2[16]!==null) { outputP2_17 = tempScores2[16]; } // Grand Total  

    // -- 


    
    return (
        <div className="score-sheet">
            

            <div className="upper-scores">
                <h2 className='score-title'>Score Sheet</h2>
                <h2>UPPER SECTION</h2>
                <ul>
                    <li><button className={buttonclass1} value="0" onClick={handleScoreClick} >Ones:</button>{outputP1_1} {outputP2_1} </li>
                    <li><button className={buttonclass2}  value="1" onClick={handleScoreClick}>Twos:</button>{outputP1_2} {outputP2_2} </li>
                    <li><button className={buttonclass3}  value="2" onClick={handleScoreClick}>Threes: </button>{outputP1_3} {outputP2_3} </li>
                    <li><button className={buttonclass4}  value="3" onClick={handleScoreClick}>Fours: </button>{outputP1_4} {outputP2_4} </li>
                    <li><button className={buttonclass5}  value="4" onClick={handleScoreClick}>Fives: </button>{outputP1_5} {outputP2_5} </li>
                    <li><button className={buttonclass6}  value="5" onClick={handleScoreClick}>Sixes: </button>{outputP1_6} {outputP2_6} </li>
                    <li><button className={buttonclass7} value="Bonus" onClick={handleScoreClick}>Bonus: </button>{outputP1_7} {outputP2_7} </li>
                    
                    <li><button className="buttonTotal" >Upper Total: </button> {outputP1_8}  {outputP2_8} </li>
                </ul>
            </div>

            <div className="lower-scores">
                <h2>LOWER SECTION</h2>
                <ul>
                    <li><button className={buttonclass9} value="Three_of_a_Kind" onClick={handleScoreClick}>Three of a Kind:</button>{outputP1_9} {outputP2_9} </li>
                
                    <li><button className={buttonclass10} value="Four_of_a_Kind" onClick={handleScoreClick}>Four of a Kind: </button>{outputP1_10} {outputP2_10} </li>
                    <li><button className={buttonclass11} value="Full_House" onClick={handleScoreClick}>Full House: </button> {outputP1_11} {outputP2_11} </li>
                    <li><button className={buttonclass12} value="Small_Straight" onClick={handleScoreClick}>Small Straight: </button> {outputP1_12} {outputP2_12} </li>
                    <li><button className={buttonclass13} value="Large_Straight" onClick={handleScoreClick}>Large Straight:  </button>{outputP1_13} {outputP2_13} </li>
                    <li><button className={buttonclass14} value="Yahtzee" onClick={handleScoreClick}>Yahtzee:  </button>{outputP1_14} {outputP2_14} </li>
                    <li><button className={buttonclass15} value="Chance" onClick={handleScoreClick}>Chance:  </button> {outputP1_15} {outputP2_15} </li>
                    
                    <li><button className="buttonTotal" >Lower Total: </button> {outputP1_16} {outputP2_16} </li>
                    <li><button className="buttonTotal" >Grand Total: </button>{outputP1_17} {outputP2_17} </li>
                </ul>
            </div>
        </div>
    )

}

export default ScoreSheet;