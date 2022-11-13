import React from 'react';
import ScoreCategoryTr from './ScoreCategoryTr';

const ScoreSheet = ({scores1, scores2, scores3, scores4, scores5, scores6, currentRoll, playersNames, setScore}) => {

    // let errorMessage;

    // const handleScoreClick = function(event) {
    //     errorMessage = setScore(event.target.value);
    //     // event.currentTarget.disabled = true;
    // };

    // map scores into tempScores
    const tempScores1 = scores1.map(score => score);
    const tempScores2 = scores2.map(score => score);
    const tempScores3 = scores3.map(score => score);
    const tempScores4 = scores4.map(score => score);
    const tempScores5 = scores5.map(score => score);
    const tempScores6 = scores6.map(score => score);

    // What do we need to solve with components
    // we have worked out the score to use above here.
    // we should loop round each category
    // and then for each user
    // we should add a line similar to
    //<tr><td><button className={buttonclass1} id="0" value="0" onClick={handleScoreClick} >Ones:</button></td><td>{outputP1_1}</td><td>{outputP2_1}</td><td>{outputP3_1}</td><td>{outputP4_1}</td><td>{outputP5_1}</td><td>{outputP6_1}</td></tr>
    // to scoresheetComponents, which is initially empty

    // <tr><td><button className={buttonclass1} id="0" value="0" onClick={handleScoreClick} >Ones:</button></td><td>{outputP1_1}</td><td>{outputP2_1}</td><td>{outputP3_1}</td><td>{outputP4_1}</td><td>{outputP5_1}</td><td>{outputP6_1}</td></tr>
    


    // var outputP1_1 = "";
    // var outputP1_2 = "";
    // var outputP1_3 = "";
    // var outputP1_4 = "";
    // var outputP1_5 = "";
    // var outputP1_6 = "";
    // var outputP1_7 = "";
    // var outputP1_8 = "";
    // var outputP1_9 = "";
    // var outputP1_10 = "";
    // var outputP1_11 = "";
    // var outputP1_12 = "";
    // var outputP1_13 = "";
    // var outputP1_14 = "";
    // var outputP1_15 = "";
    // var outputP1_16 = "";
    // var outputP1_17 = "";

    // var outputP2_1 = "";
    // var outputP2_2 = "";
    // var outputP2_3 = "";
    // var outputP2_4 = "";
    // var outputP2_5 = "";
    // var outputP2_6 = "";
    // var outputP2_7 = "";
    // var outputP2_8 = "";
    // var outputP2_9 = "";
    // var outputP2_10 = "";
    // var outputP2_11 = "";
    // var outputP2_12 = "";
    // var outputP2_13 = "";
    // var outputP2_14 = "";
    // var outputP2_15 = "";
    // var outputP2_16 = "";
    // var outputP2_17 = "";

    // var outputP3_1 = "";
    // var outputP3_2 = "";
    // var outputP3_3 = "";
    // var outputP3_4 = "";
    // var outputP3_5 = "";
    // var outputP3_6 = "";
    // var outputP3_7 = "";
    // var outputP3_8 = "";
    // var outputP3_9 = "";
    // var outputP3_10 = "";
    // var outputP3_11 = "";
    // var outputP3_12 = "";
    // var outputP3_13 = "";
    // var outputP3_14 = "";
    // var outputP3_15 = "";
    // var outputP3_16 = "";
    // var outputP3_17 = "";

    // var outputP4_1 = "";
    // var outputP4_2 = "";
    // var outputP4_3 = "";
    // var outputP4_4 = "";
    // var outputP4_5 = "";
    // var outputP4_6 = "";
    // var outputP4_7 = "";
    // var outputP4_8 = "";
    // var outputP4_9 = "";
    // var outputP4_10 = "";
    // var outputP4_11 = "";
    // var outputP4_12 = "";
    // var outputP4_13 = "";
    // var outputP4_14 = "";
    // var outputP4_15 = "";
    // var outputP4_16 = "";
    // var outputP4_17 = "";

    // var outputP5_1 = "";
    // var outputP5_2 = "";
    // var outputP5_3 = "";
    // var outputP5_4 = "";
    // var outputP5_5 = "";
    // var outputP5_6 = "";
    // var outputP5_7 = "";
    // var outputP5_8 = "";
    // var outputP5_9 = "";
    // var outputP5_10 = "";
    // var outputP5_11 = "";
    // var outputP5_12 = "";
    // var outputP5_13 = "";
    // var outputP5_14 = "";
    // var outputP5_15 = "";
    // var outputP5_16 = "";
    // var outputP5_17 = "";

    // var outputP6_1 = "";
    // var outputP6_2 = "";
    // var outputP6_3 = "";
    // var outputP6_4 = "";
    // var outputP6_5 = "";
    // var outputP6_6 = "";
    // var outputP6_7 = "";
    // var outputP6_8 = "";
    // var outputP6_9 = "";
    // var outputP6_10 = "";
    // var outputP6_11 = "";
    // var outputP6_12 = "";
    // var outputP6_13 = "";
    // var outputP6_14 = "";
    // var outputP6_15 = "";
    // var outputP6_16 = "";
    // var outputP6_17 = "";


    // var buttonclass1 = "buttonScores";
    // var buttonclass2 = "buttonScores";
    // var buttonclass3 = "buttonScores";
    // var buttonclass4 = "buttonScores";
    // var buttonclass5 = "buttonScores";
    // var buttonclass6 = "buttonScores";
    // var buttonclass7 = "buttonScores";
    // var buttonclass9 = "buttonScores";
    // var buttonclass10 = "buttonScores";
    // var buttonclass11 = "buttonScores";
    // var buttonclass12 = "buttonScores";
    // var buttonclass13 = "buttonScores";
    // var buttonclass14 = "buttonScores";
    // var buttonclass15 = "buttonScores";

    // Player1

    // document.getElementById("Button").disabled = true;
    // Enabling a html button
    // document.getElementById("Button").disabled = false;

    
    // if(tempScores1[0]!==null) { outputP1_1 = tempScores1[0]; ; } // Ones
    // if(tempScores1[1]!==null) { outputP1_2 = tempScores1[1]; ; }
    // if(tempScores1[2]!==null) { outputP1_3 = tempScores1[2]; ; }
    // if(tempScores1[3]!==null) { outputP1_4 = tempScores1[3]; ; }
    // if(tempScores1[4]!==null) { outputP1_5 = tempScores1[4]; ; }
    // if(tempScores1[5]!==null) { outputP1_6 = tempScores1[5]; ; } // Sixes

    // if(tempScores1[6]!==null) { outputP1_7 = tempScores1[6]; ; } //Bonus
    // if(tempScores1[7]!==null) { outputP1_8 = tempScores1[7];} // Upper Total
    
    // if(tempScores1[8]!==null) { outputP1_9 = tempScores1[8]; ; } // Three of a Kind
    // if(tempScores1[9]!==null) { outputP1_10 = tempScores1[9];  } // Four of a Kind
    // if(tempScores1[10]!==null) { outputP1_11 = tempScores1[10];  } // Full House
    // if(tempScores1[11]!==null) { outputP1_12 = tempScores1[11];  } // Small Straight
    // if(tempScores1[12]!==null) { outputP1_13 = tempScores1[12];  } // Large Straight
    // if(tempScores1[13]!=null) { outputP1_14 = tempScores1[13];  } // Yahtzee
    // if(tempScores1[14]!=null) { outputP1_15 = tempScores1[14];  } // Chance
    
    // if(tempScores1[15]!==null) { outputP1_16 = tempScores1[15]; } // Lower Total
    // if(tempScores1[16]!==null) { outputP1_17 = tempScores1[16]; } // Grand Total  


    // //P2
    // if(tempScores2[0]!==null) { outputP2_1 = tempScores2[0];   } // Ones
    // if(tempScores2[1]!==null) { outputP2_2 = tempScores2[1]; }
    // if(tempScores2[2]!==null) { outputP2_3 = tempScores2[2];  }
    // if(tempScores2[3]!==null) { outputP2_4 = tempScores2[3]; }
    // if(tempScores2[4]!==null) { outputP2_5 = tempScores2[4]; }
    // if(tempScores2[5]!==null) { outputP2_6 = tempScores2[5]; } // Sixes

    // if(tempScores2[6]!==null) { outputP2_7 = tempScores2[6]; } //Bonus
    // if(tempScores2[7]!==null) { outputP2_8 = tempScores2[7];} // Upper Total
    
    // if(tempScores2[8]!==null) { outputP2_9 = tempScores2[8]; } // Three of a Kind
    // if(tempScores2[9]!==null) { outputP2_10 = tempScores2[9]; } // Four of a Kind
    // if(tempScores2[10]!==null) { outputP2_11 = tempScores2[10];  } // Full House
    // if(tempScores2[11]!==null) { outputP2_12 = tempScores2[11];  } // Small Straight
    // if(tempScores2[12]!==null) { outputP2_13 = tempScores2[12];  } // Large Straight
    // if(tempScores2[13]!=null) { outputP2_14 = tempScores2[13];  } // Yahtzee
    // if(tempScores2[14]!=null) { outputP2_15 = tempScores2[14];  } // Chance
    
    // if(tempScores2[15]!==null) { outputP2_16 = tempScores2[15]; } // Lower Total
    // if(tempScores2[16]!==null) { outputP2_17 = tempScores2[16]; } // Grand Total  

    // // -- 

    // //P3
    // if(tempScores3[0]!==null) { outputP3_1 = tempScores3[0];   } // Ones
    // if(tempScores3[1]!==null) { outputP3_2 = tempScores3[1]; }
    // if(tempScores3[2]!==null) { outputP3_3 = tempScores3[2];  }
    // if(tempScores3[3]!==null) { outputP3_4 = tempScores3[3]; }
    // if(tempScores3[4]!==null) { outputP3_5 = tempScores3[4]; }
    // if(tempScores3[5]!==null) { outputP3_6 = tempScores3[5]; } // Sixes

    // if(tempScores3[6]!==null) { outputP3_7 = tempScores3[6]; } //Bonus
    // if(tempScores3[7]!==null) { outputP3_8 = tempScores3[7];} // Upper Total
    
    // if(tempScores3[8]!==null) { outputP3_9 = tempScores3[8]; } // Three of a Kind
    // if(tempScores3[9]!==null) { outputP3_10 = tempScores3[9]; } // Four of a Kind
    // if(tempScores3[10]!==null) { outputP3_11 = tempScores3[10];  } // Full House
    // if(tempScores3[11]!==null) { outputP3_12 = tempScores3[11];  } // Small Straight
    // if(tempScores3[12]!==null) { outputP3_13 = tempScores3[12];  } // Large Straight
    // if(tempScores3[13]!=null) { outputP3_14 = tempScores3[13];  } // Yahtzee
    // if(tempScores3[14]!=null) { outputP3_15 = tempScores3[14];  } // Chance
    
    // if(tempScores3[15]!==null) { outputP3_16 = tempScores3[15]; } // Lower Total
    // if(tempScores3[16]!==null) { outputP3_17 = tempScores3[16]; } // Grand Total  

    // //

    // //P4
    // if(tempScores4[0]!==null) { outputP4_1 = tempScores4[0];   } // Ones
    // if(tempScores4[1]!==null) { outputP4_2 = tempScores4[1]; }
    // if(tempScores4[2]!==null) { outputP4_3 = tempScores4[2];  }
    // if(tempScores4[3]!==null) { outputP4_4 = tempScores4[3]; }
    // if(tempScores4[4]!==null) { outputP4_5 = tempScores4[4]; }
    // if(tempScores4[5]!==null) { outputP4_6 = tempScores4[5]; } // Sixes

    // if(tempScores4[6]!==null) { outputP4_7 = tempScores4[6]; } //Bonus
    // if(tempScores4[7]!==null) { outputP4_8 = tempScores4[7];} // Upper Total
    
    // if(tempScores4[8]!==null) { outputP4_9 = tempScores4[8]; } // Three of a Kind
    // if(tempScores4[9]!==null) { outputP4_10 = tempScores4[9]; } // Four of a Kind
    // if(tempScores4[10]!==null) { outputP4_11 = tempScores4[10];  } // Full House
    // if(tempScores4[11]!==null) { outputP4_12 = tempScores4[11];  } // Small Straight
    // if(tempScores4[12]!==null) { outputP4_13 = tempScores4[12];  } // Large Straight
    // if(tempScores4[13]!=null) { outputP4_14 = tempScores4[13];  } // Yahtzee
    // if(tempScores4[14]!=null) { outputP4_15 = tempScores4[14];  } // Chance
    
    // if(tempScores4[15]!==null) { outputP4_16 = tempScores4[15]; } // Lower Total
    // if(tempScores4[16]!==null) { outputP4_17 = tempScores4[16]; } // Grand Total  

    // //P5
    // if(tempScores5[0]!==null) { outputP5_1 = tempScores5[0];   } // Ones
    // if(tempScores5[1]!==null) { outputP5_2 = tempScores5[1]; }
    // if(tempScores5[2]!==null) { outputP5_3 = tempScores5[2];  }
    // if(tempScores5[3]!==null) { outputP5_4 = tempScores5[3]; }
    // if(tempScores5[4]!==null) { outputP5_5 = tempScores5[4]; }
    // if(tempScores5[5]!==null) { outputP5_6 = tempScores5[5]; } // Sixes

    // if(tempScores5[6]!==null) { outputP5_7 = tempScores5[6]; } //Bonus
    // if(tempScores5[7]!==null) { outputP5_8 = tempScores5[7];} // Upper Total
    
    // if(tempScores5[8]!==null) { outputP5_9 = tempScores5[8]; } // Three of a Kind
    // if(tempScores5[9]!==null) { outputP5_10 = tempScores5[9]; } // Four of a Kind
    // if(tempScores5[10]!==null) { outputP5_11 = tempScores5[10];  } // Full House
    // if(tempScores5[11]!==null) { outputP5_12 = tempScores5[11];  } // Small Straight
    // if(tempScores5[12]!==null) { outputP5_13 = tempScores5[12];  } // Large Straight
    // if(tempScores5[13]!=null) { outputP5_14 = tempScores5[13];  } // Yahtzee
    // if(tempScores5[14]!=null) { outputP5_15 = tempScores5[14];  } // Chance
    
    // if(tempScores5[15]!==null) { outputP5_16 = tempScores5[15]; } // Lower Total
    // if(tempScores5[16]!==null) { outputP5_17 = tempScores5[16]; } // Grand Total  

    //P6
    // if(tempScores6[0]!==null) { outputP6_1 = tempScores6[0];   } // Ones
    // if(tempScores6[1]!==null) { outputP6_2 = tempScores6[1]; }
    // if(tempScores6[2]!==null) { outputP6_3 = tempScores6[2];  }
    // if(tempScores6[3]!==null) { outputP6_4 = tempScores6[3]; }
    // if(tempScores6[4]!==null) { outputP6_5 = tempScores6[4]; }
    // if(tempScores6[5]!==null) { outputP6_6 = tempScores6[5]; } // Sixes

    // if(tempScores6[6]!==null) { outputP6_7 = tempScores6[6]; } //Bonus
    // if(tempScores6[7]!==null) { outputP6_8 = tempScores6[7];} // Upper Total
    
    // if(tempScores6[8]!==null) { outputP6_9 = tempScores6[8]; } // Three of a Kind
    // if(tempScores6[9]!==null) { outputP6_10 = tempScores6[9]; } // Four of a Kind
    // if(tempScores6[10]!==null) { outputP6_11 = tempScores6[10];  } // Full House
    // if(tempScores6[11]!==null) { outputP6_12 = tempScores6[11];  } // Small Straight
    // if(tempScores6[12]!==null) { outputP6_13 = tempScores6[12];  } // Large Straight
    // if(tempScores6[13]!=null) { outputP6_14 = tempScores6[13];  } // Yahtzee
    // if(tempScores6[14]!=null) { outputP6_15 = tempScores6[14];  } // Chance
    
    // if(tempScores6[15]!==null) { outputP6_16 = tempScores6[15]; } // Lower Total
    // if(tempScores6[16]!==null) { outputP6_17 = tempScores6[16]; } // Grand Total  

    
    return (
        <div className="score-sheet">

            {/* <div>{errorMessage}</div> */}

            <div className="upper-scores">
                
                <table className="table">
                    <tbody>
                    <tr><th>UPPER SECTION</th><th>{ playersNames[0] } </th><th>{ playersNames[1] }</th><th>{ playersNames[2] } </th><th>{ playersNames[3] } </th><th>{ playersNames[4] } </th><th>{ playersNames[5] } </th></tr>
                    
                    <ScoreCategoryTr  categoryId="0" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} />
                    <ScoreCategoryTr  categoryId="1" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} />
                    <ScoreCategoryTr  categoryId="2" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} />
                    <ScoreCategoryTr  categoryId="3" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} />
                    <ScoreCategoryTr  categoryId="4" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} />
                    <ScoreCategoryTr  categoryId="5" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} />
                    <ScoreCategoryTr  categoryId="6" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} />

                    <ScoreCategoryTr  categoryId="7" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 

                    {/* <tr><td><button className={buttonclass1} id="0" value="0" onClick={handleScoreClick} >Ones:</button></td><td>{outputP1_1}</td><td>{outputP2_1}</td><td>{outputP3_1}</td><td>{outputP4_1}</td><td>{outputP5_1}</td><td>{outputP6_1}</td></tr>
                     */}
                    
                    {/* <tr><td><button className={buttonclass2} id="1" value="1" onClick={handleScoreClick}>Twos:</button></td><td>{outputP1_2}</td><td>{outputP2_2}</td><td>{outputP3_2}</td><td>{outputP4_2}</td><td>{outputP5_2}</td><td>{outputP6_2}</td></tr>
                    <tr><td><button className={buttonclass3} id="2" value="2" onClick={handleScoreClick}>Threes: </button></td><td>{outputP1_3}</td><td>{outputP2_3}</td><td>{outputP3_3}</td><td>{outputP4_3}</td><td>{outputP5_3}</td><td>{outputP6_3}</td></tr>
                    <tr><td><button className={buttonclass4} id="3" value="3" onClick={handleScoreClick}>Fours: </button></td><td>{outputP1_4}</td><td>{outputP2_4}</td><td>{outputP3_4}</td><td>{outputP4_4}</td><td>{outputP5_4}</td><td>{outputP6_4}</td></tr>
                    <tr><td><button className={buttonclass5} id="4" value="4" onClick={handleScoreClick}>Fives: </button></td><td>{outputP1_5}</td><td>{outputP2_5}</td><td>{outputP3_5}</td><td>{outputP4_5}</td><td>{outputP5_5}</td><td>{outputP6_5}</td></tr>
                    <tr><td><button className={buttonclass6} id="5" value="5" onClick={handleScoreClick}>Sixes: </button></td><td>{outputP1_6}</td><td>{outputP2_6}</td><td>{outputP3_6}</td><td>{outputP4_6}</td><td>{outputP5_6}</td><td>{outputP6_6}</td></tr>
                    <tr><td><button className={buttonclass7} id="6" value="Bonus" onClick={handleScoreClick}>Bonus: </button></td><td>{outputP1_7}</td><td>{outputP2_7}</td><td>{outputP3_7}</td><td>{outputP4_7}</td><td>{outputP5_7}</td><td>{outputP6_7}</td></tr>
                    
                    <tr><td><button className="buttonTotal" id="7" >Upper Total: </button></td><td>{outputP1_8}</td><td>  {outputP2_8}</td><td> {outputP3_8}</td><td> {outputP4_8}</td><td> {outputP5_8}</td><td> {outputP6_8} </td></tr>
                 */}
            
                    <tr><th>LOWER SECTION</th></tr>
                    {/* Three_of_a_Kind -  */}
                    <ScoreCategoryTr  categoryId="8" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 
                    <ScoreCategoryTr  categoryId="9" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 
                    <ScoreCategoryTr  categoryId="10" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 
                    <ScoreCategoryTr  categoryId="11" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 
                    <ScoreCategoryTr  categoryId="12" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 
                    <ScoreCategoryTr  categoryId="13" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 
                    <ScoreCategoryTr  categoryId="14" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 

                    {/* now totals */}
                    <ScoreCategoryTr  categoryId="15" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 
                    <ScoreCategoryTr  categoryId="16" tempScores1={tempScores1}  tempScores2={tempScores2}  tempScores3={tempScores3}  tempScores4={tempScores4}  tempScores5={tempScores5}  tempScores6={tempScores6} setScore={setScore} /> 

                    {/* <tr><td><button className={buttonclass9}  id="8"  value="Three_of_a_Kind" onClick={handleScoreClick}>Three of a Kind:</button></td><td>{outputP1_9} </td><td>{outputP2_9} </td><td>{outputP3_9} </td><td>{outputP4_9} </td><td>{outputP5_9} </td><td>{outputP6_9} </td></tr> */}
                    {/* <tr><td><button className={buttonclass10} id="9"  value="Four_of_a_Kind" onClick={handleScoreClick}>Four of a Kind: </button></td><td>{outputP1_10}</td><td>{outputP2_10}</td><td>{outputP3_10}</td><td>{outputP4_10}</td><td>{outputP5_10}</td><td>{outputP6_10}</td></tr>
                    <tr><td><button className={buttonclass11} id="10" value="Full_House" onClick={handleScoreClick}>Full House: </button></td><td>{outputP1_11}</td><td>{outputP2_11}</td><td>{outputP3_11}</td><td>{outputP4_11}</td><td>{outputP5_11}</td><td>{outputP6_11}</td></tr>
                    <tr><td><button className={buttonclass12} id="11" value="Small_Straight" onClick={handleScoreClick}>Small Straight: </button></td><td>{outputP1_12}</td><td>{outputP2_12}</td><td>{outputP3_12}</td><td>{outputP4_12}</td><td>{outputP5_12}</td><td>{outputP6_12}</td></tr>
                    <tr><td><button className={buttonclass13} id="12" value="Large_Straight" onClick={handleScoreClick}>Large Straight:  </button></td><td>{outputP1_13}</td><td>{outputP2_13}</td><td>{outputP3_13}</td><td>{outputP4_13}</td><td>{outputP5_13}</td><td>{outputP6_13}</td></tr>
                    <tr><td><button className={buttonclass14} id="13" value="Yahtzee" onClick={handleScoreClick}>Yahtzee:  </button></td><td>{outputP1_14}</td><td>{outputP2_14}</td><td>{outputP3_14}</td><td>{outputP4_14}</td><td>{outputP5_14}</td><td>{outputP6_14}</td></tr>
                    <tr><td><button className={buttonclass15} id="14" value="Chance" onClick={handleScoreClick}>Chance:  </button></td><td>{outputP1_15}</td><td>{outputP2_15}</td><td>{outputP3_15}</td><td>{outputP4_15}</td><td>{outputP5_15}</td><td>{outputP6_15}</td></tr>
                     */}
                    {/* <tr><td><button className="buttonTotal" >Lower Total: </button></td><td>{outputP1_16}</td><td>{outputP2_16}</td><td>{outputP3_16}</td><td>{outputP4_16}</td><td>{outputP5_16}</td><td>{outputP6_16}</td></tr>
                    <tr><td><button className="buttonTotal" >Grand Total: </button></td><td>{outputP1_17}</td><td>{outputP2_17}</td><td>{outputP3_17}</td><td>{outputP4_17}</td><td>{outputP5_17}</td><td>{outputP6_17}</td></tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )

    // if(tempScores1[0]!==null) {document.getElementById("0").disabled = true; } else {  document.getElementById("0").disabled = false;  }


}

export default ScoreSheet;