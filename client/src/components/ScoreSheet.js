import React from 'react';

const ScoreSheet = ({scores, currentRoll, setScore}) => {

    const handleScoreClick = function(event) {
        setScore(event.target.value);
        event.currentTarget.disabled = true;
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
    var output16 = "";
    var output17 = "";

    

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





    if(tempScores[0]!==null) { output1 = tempScores[0]; buttonclass1="buttonScoresDeactivated";  } // Ones
    if(tempScores[1]!==null) { output2 = tempScores[1]; buttonclass2="buttonScoresDeactivated"; }
    if(tempScores[2]!==null) { output3 = tempScores[2]; buttonclass3="buttonScoresDeactivated"; }
    if(tempScores[3]!==null) { output4 = tempScores[3]; buttonclass4="buttonScoresDeactivated"; }
    if(tempScores[4]!==null) { output5 = tempScores[4]; buttonclass5="buttonScoresDeactivated"; }

    if(tempScores[5]!==null) { output6 = tempScores[5]; buttonclass6="buttonScoresDeactivated"; } // Sixes

    
    if(tempScores[6]!==null) { output7 = tempScores[6]; buttonclass7="buttonScoresDeactivated"; } //Bonus


    if(tempScores[6]!==null) { output7 = tempScores[6]; buttonclass7="buttonScoresDeactivated"; } // Bonus

    if(tempScores[7]!==null) { output8 = tempScores[7];} // Upper Total
    if(tempScores[8]!==null) { output9 = tempScores[8]; buttonclass9="buttonScoresDeactivated"; } // Three of a Kind
    if(tempScores[9]!==null) { output10 = tempScores[9]; buttonclass10="buttonScoresDeactivated"; } // Four of a Kind
    if(tempScores[10]!==null) { output11 = tempScores[10]; buttonclass11="buttonScoresDeactivated"; } // Full House
    if(tempScores[11]!==null) { output12 = tempScores[11]; buttonclass12="buttonScoresDeactivated"; } // Small Straight
    if(tempScores[12]!==null) { output13 = tempScores[12]; buttonclass13="buttonScoresDeactivated"; } // Large Straight

    if(tempScores[13]!=null) { output14 = tempScores[13]; buttonclass14="buttonScoresDeactivated"; } // Yahtzee
    if(tempScores[14]!=null) { output15 = tempScores[14]; buttonclass15="buttonScoresDeactivated"; } // Chance
    
    if(tempScores[15]!==null) { output16 = tempScores[15]; } // Lower Total
    if(tempScores[16]!==null) { output17 = tempScores[16]; } // Grand Total  
    return (
        <div className="score-sheet">
            

            <div className="upper-scores">
                <ul>
                    <li><button className={buttonclass1} value="0" onClick={handleScoreClick} >Ones: {output1}</button></li>
                    <li><button className={buttonclass2}  value="1" onClick={handleScoreClick}>Twos: {output2}</button> </li>
                    <li><button className={buttonclass3}  value="2" onClick={handleScoreClick}>Threes: {output3}</button> </li>
                    <li><button className={buttonclass4}  value="3" onClick={handleScoreClick}>Fours: {output4}</button> </li>
                    <li><button className={buttonclass5}  value="4" onClick={handleScoreClick}>Fives: {output5}</button> </li>
                    <li><button className={buttonclass6}  value="5" onClick={handleScoreClick}>Sixes: {output6}</button> </li>
                    <li><button className={buttonclass7} value="Bonus" onClick={handleScoreClick}>Bonus: {output7}</button> </li>
                    
                    <li><button className="buttonTotal" >Upper Total: {output8}</button> </li>
                </ul>
            </div>

            <div className="lower-scores">
                <ul>
                    <li><button className={buttonclass9} value="Three_of_a_Kind" onClick={handleScoreClick}>Three of a Kind: {output9}</button> </li>
                
                    <li><button className={buttonclass10} value="Four_of_a_Kind" onClick={handleScoreClick}>Four of a Kind: {output10}</button> </li>
                    <li><button className={buttonclass11} value="Full_House" onClick={handleScoreClick}>Full House: {output11}</button> </li>
                    <li><button className={buttonclass12} value="Small_Straight" onClick={handleScoreClick}>Small Straight: {output12}</button> </li>
                    <li><button className={buttonclass13} value="Large_Straight" onClick={handleScoreClick}>Large Straight: {output13} </button> </li>
                    <li><button className={buttonclass14} value="Yahtzee" onClick={handleScoreClick}>Yahtzee: {output14} </button> </li>
                    <li><button className={buttonclass15} value="Chance" onClick={handleScoreClick}>Chance: {output15} </button> </li>
                    
                    <li><button className="buttonTotal" >Lower Total: {output16}</button> </li>
                    <li><button className="buttonTotal" >Grand Total: {output17}</button> </li>
                </ul>
            </div>
        </div>
    )

}

export default ScoreSheet;