import React from 'react';

const ScoreSheet = ({scores1, scores2, scores3, scores4, scores5, scores6, currentRoll, setScore}) => {

    const handleScoreClick = function(event) {
        setScore(event.target.value);
        // event.currentTarget.disabled = true;
    };

    // map scores into tempScores
    const tempScores1 = scores1.map(score => score);
    const tempScores2 = scores2.map(score => score);
    const tempScores3 = scores3.map(score => score);
    const tempScores4 = scores4.map(score => score);
    const tempScores5 = scores5.map(score => score);
    const tempScores6 = scores6.map(score => score);


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

    var outputP3_1 = "";
    var outputP3_2 = "";
    var outputP3_3 = "";
    var outputP3_4 = "";
    var outputP3_5 = "";
    var outputP3_6 = "";
    var outputP3_7 = "";
    var outputP3_8 = "";
    var outputP3_9 = "";
    var outputP3_10 = "";
    var outputP3_11 = "";
    var outputP3_12 = "";
    var outputP3_13 = "";
    var outputP3_14 = "";
    var outputP3_15 = "";
    var outputP3_16 = "";
    var outputP3_17 = "";

    var outputP4_1 = "";
    var outputP4_2 = "";
    var outputP4_3 = "";
    var outputP4_4 = "";
    var outputP4_5 = "";
    var outputP4_6 = "";
    var outputP4_7 = "";
    var outputP4_8 = "";
    var outputP4_9 = "";
    var outputP4_10 = "";
    var outputP4_11 = "";
    var outputP4_12 = "";
    var outputP4_13 = "";
    var outputP4_14 = "";
    var outputP4_15 = "";
    var outputP4_16 = "";
    var outputP4_17 = "";

    var outputP5_1 = "";
    var outputP5_2 = "";
    var outputP5_3 = "";
    var outputP5_4 = "";
    var outputP5_5 = "";
    var outputP5_6 = "";
    var outputP5_7 = "";
    var outputP5_8 = "";
    var outputP5_9 = "";
    var outputP5_10 = "";
    var outputP5_11 = "";
    var outputP5_12 = "";
    var outputP5_13 = "";
    var outputP5_14 = "";
    var outputP5_15 = "";
    var outputP5_16 = "";
    var outputP5_17 = "";

    var outputP6_1 = "";
    var outputP6_2 = "";
    var outputP6_3 = "";
    var outputP6_4 = "";
    var outputP6_5 = "";
    var outputP6_6 = "";
    var outputP6_7 = "";
    var outputP6_8 = "";
    var outputP6_9 = "";
    var outputP6_10 = "";
    var outputP6_11 = "";
    var outputP6_12 = "";
    var outputP6_13 = "";
    var outputP6_14 = "";
    var outputP6_15 = "";
    var outputP6_16 = "";
    var outputP6_17 = "";


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

    //P3
    if(tempScores3[0]!==null) { outputP3_1 = tempScores3[0]; buttonclass1="buttonScoresDeactivated";  } // Ones
    if(tempScores3[1]!==null) { outputP3_2 = tempScores3[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores3[2]!==null) { outputP3_3 = tempScores3[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores3[3]!==null) { outputP3_4 = tempScores3[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores3[4]!==null) { outputP3_5 = tempScores3[4]; buttonclass5="buttonScoresDeactivated"; }
    if(tempScores3[5]!==null) { outputP3_6 = tempScores3[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    if(tempScores3[6]!==null) { outputP3_7 = tempScores3[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus
    if(tempScores3[7]!==null) { outputP3_8 = tempScores3[7];} // Upper Total
    
    if(tempScores3[8]!==null) { outputP3_9 = tempScores3[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores3[9]!==null) { outputP3_10 = tempScores3[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores3[10]!==null) { outputP3_11 = tempScores3[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores3[11]!==null) { outputP3_12 = tempScores3[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores3[12]!==null) { outputP3_13 = tempScores3[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight
    if(tempScores3[13]!=null) { outputP3_14 = tempScores3[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores3[14]!=null) { outputP3_15 = tempScores3[14]; buttonclass15="buttonScoresDeactivated"; } // Chance
    
    if(tempScores3[15]!==null) { outputP3_16 = tempScores3[15]; } // Lower Total
    if(tempScores3[16]!==null) { outputP3_17 = tempScores3[16]; } // Grand Total  

    //

    //P4
    if(tempScores4[0]!==null) { outputP4_1 = tempScores4[0]; buttonclass1="buttonScoresDeactivated";  } // Ones
    if(tempScores4[1]!==null) { outputP4_2 = tempScores4[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores4[2]!==null) { outputP4_3 = tempScores4[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores4[3]!==null) { outputP4_4 = tempScores4[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores4[4]!==null) { outputP4_5 = tempScores4[4]; buttonclass5="buttonScoresDeactivated"; }
    if(tempScores4[5]!==null) { outputP4_6 = tempScores4[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    if(tempScores4[6]!==null) { outputP4_7 = tempScores4[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus
    if(tempScores4[7]!==null) { outputP4_8 = tempScores4[7];} // Upper Total
    
    if(tempScores4[8]!==null) { outputP4_9 = tempScores4[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores4[9]!==null) { outputP4_10 = tempScores4[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores4[10]!==null) { outputP4_11 = tempScores4[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores4[11]!==null) { outputP4_12 = tempScores4[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores4[12]!==null) { outputP4_13 = tempScores4[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight
    if(tempScores4[13]!=null) { outputP4_14 = tempScores4[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores4[14]!=null) { outputP4_15 = tempScores4[14]; buttonclass15="buttonScoresDeactivated"; } // Chance
    
    if(tempScores4[15]!==null) { outputP4_16 = tempScores4[15]; } // Lower Total
    if(tempScores4[16]!==null) { outputP4_17 = tempScores4[16]; } // Grand Total  

    //P5
    if(tempScores5[0]!==null) { outputP5_1 = tempScores5[0]; buttonclass1="buttonScoresDeactivated";  } // Ones
    if(tempScores5[1]!==null) { outputP5_2 = tempScores5[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores5[2]!==null) { outputP5_3 = tempScores5[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores5[3]!==null) { outputP5_4 = tempScores5[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores5[4]!==null) { outputP5_5 = tempScores5[4]; buttonclass5="buttonScoresDeactivated"; }
    if(tempScores5[5]!==null) { outputP5_6 = tempScores5[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    if(tempScores5[6]!==null) { outputP5_7 = tempScores5[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus
    if(tempScores5[7]!==null) { outputP5_8 = tempScores5[7];} // Upper Total
    
    if(tempScores5[8]!==null) { outputP5_9 = tempScores5[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores5[9]!==null) { outputP5_10 = tempScores5[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores5[10]!==null) { outputP5_11 = tempScores5[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores5[11]!==null) { outputP5_12 = tempScores5[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores5[12]!==null) { outputP5_13 = tempScores5[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight
    if(tempScores5[13]!=null) { outputP5_14 = tempScores5[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores5[14]!=null) { outputP5_15 = tempScores5[14]; buttonclass15="buttonScoresDeactivated"; } // Chance
    
    if(tempScores5[15]!==null) { outputP5_16 = tempScores5[15]; } // Lower Total
    if(tempScores5[16]!==null) { outputP5_17 = tempScores5[16]; } // Grand Total  

    //P6
    if(tempScores6[0]!==null) { outputP6_1 = tempScores6[0]; buttonclass1="buttonScoresDeactivated";  } // Ones
    if(tempScores6[1]!==null) { outputP6_2 = tempScores6[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores6[2]!==null) { outputP6_3 = tempScores6[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores6[3]!==null) { outputP6_4 = tempScores6[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores6[4]!==null) { outputP6_5 = tempScores6[4]; buttonclass5="buttonScoresDeactivated"; }
    if(tempScores6[5]!==null) { outputP6_6 = tempScores6[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    if(tempScores6[6]!==null) { outputP6_7 = tempScores6[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus
    if(tempScores6[7]!==null) { outputP6_8 = tempScores6[7];} // Upper Total
    
    if(tempScores6[8]!==null) { outputP6_9 = tempScores6[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores6[9]!==null) { outputP6_10 = tempScores6[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores6[10]!==null) { outputP6_11 = tempScores6[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores6[11]!==null) { outputP6_12 = tempScores6[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores6[12]!==null) { outputP6_13 = tempScores6[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight
    if(tempScores6[13]!=null) { outputP6_14 = tempScores6[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores6[14]!=null) { outputP6_15 = tempScores6[14]; buttonclass15="buttonScoresDeactivated"; } // Chance
    
    if(tempScores6[15]!==null) { outputP6_16 = tempScores6[15]; } // Lower Total
    if(tempScores6[16]!==null) { outputP6_17 = tempScores6[16]; } // Grand Total  


    
    return (
        <div className="score-sheet">
            

            <div className="upper-scores">
                <h2 className='score-title'>Score Sheet</h2>
                <h2>UPPER SECTION</h2>
                <ul>
                    <li><button className={buttonclass1} value="0" onClick={handleScoreClick} >Ones:</button>{outputP1_1} {outputP2_1} {outputP3_1} {outputP4_1} {outputP5_1} {outputP6_1} </li>
                    <li><button className={buttonclass2}  value="1" onClick={handleScoreClick}>Twos:</button>{outputP1_2} {outputP2_2} {outputP3_2} {outputP4_2} {outputP5_2} {outputP6_2} </li>
                    <li><button className={buttonclass3}  value="2" onClick={handleScoreClick}>Threes: </button>{outputP1_3} {outputP2_3} {outputP3_3} {outputP4_3} {outputP5_3} {outputP6_3} </li>
                    <li><button className={buttonclass4}  value="3" onClick={handleScoreClick}>Fours: </button>{outputP1_4} {outputP2_4} {outputP3_4} {outputP4_4} {outputP5_4} {outputP6_4} </li>
                    <li><button className={buttonclass5}  value="4" onClick={handleScoreClick}>Fives: </button>{outputP1_5} {outputP2_5} {outputP3_5} {outputP4_5} {outputP5_5} {outputP6_5} </li>
                    <li><button className={buttonclass6}  value="5" onClick={handleScoreClick}>Sixes: </button>{outputP1_6} {outputP2_6} {outputP3_6} {outputP4_6} {outputP5_6} {outputP6_6} </li>
                    <li><button className={buttonclass7} value="Bonus" onClick={handleScoreClick}>Bonus: </button>{outputP1_7} {outputP2_7} {outputP3_7} {outputP4_7} {outputP5_7} {outputP6_7} </li>
                    
                    <li><button className="buttonTotal" >Upper Total: </button> {outputP1_8}  {outputP2_8} {outputP3_8} {outputP4_8} {outputP5_8} {outputP6_8} </li>
                </ul>
            </div>

            <div className="lower-scores">
                <h2>LOWER SECTION</h2>
                <ul>
                    <li><button className={buttonclass9} value="Three_of_a_Kind" onClick={handleScoreClick}>Three of a Kind:</button>{outputP1_9} {outputP2_9} {outputP3_9} {outputP4_9} {outputP5_9} {outputP6_9} </li>
                    <li><button className={buttonclass10} value="Four_of_a_Kind" onClick={handleScoreClick}>Four of a Kind: </button>{outputP1_10} {outputP2_10} {outputP3_10} {outputP4_10} {outputP5_10} {outputP6_10} </li>
                    <li><button className={buttonclass11} value="Full_House" onClick={handleScoreClick}>Full House: </button> {outputP1_11} {outputP2_11} {outputP3_11} {outputP4_11} {outputP5_11} {outputP6_11} </li>
                    <li><button className={buttonclass12} value="Small_Straight" onClick={handleScoreClick}>Small Straight: </button> {outputP1_12} {outputP2_12} {outputP3_12} {outputP4_12} {outputP5_12} {outputP6_12} </li>
                    <li><button className={buttonclass13} value="Large_Straight" onClick={handleScoreClick}>Large Straight:  </button>{outputP1_13} {outputP2_13} {outputP3_13} {outputP4_13} {outputP5_13} {outputP6_13} </li>
                    <li><button className={buttonclass14} value="Yahtzee" onClick={handleScoreClick}>Yahtzee:  </button>{outputP1_14} {outputP2_14} {outputP3_14} {outputP4_14} {outputP5_14} {outputP6_14} </li>
                    <li><button className={buttonclass15} value="Chance" onClick={handleScoreClick}>Chance:  </button> {outputP1_15} {outputP2_15} {outputP3_15} {outputP4_15} {outputP5_15} {outputP6_15} </li>
                    
                    <li><button className="buttonTotal" >Lower Total: </button> {outputP1_16} {outputP2_16} {outputP3_16} {outputP4_16} {outputP5_16} {outputP6_16} </li>
                    <li><button className="buttonTotal" >Grand Total: </button>{outputP1_17} {outputP2_17} {outputP3_17} {outputP4_17} {outputP5_17} {outputP6_17} </li>
                </ul>
            </div>
        </div>
    )

}

export default ScoreSheet;