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

    if(tempScores[0]!="null") { output1 = tempScores[0]; }
    if(tempScores[1]!="null") { output2 = tempScores[1]; }
    if(tempScores[2]!="null") { output3 = tempScores[2]; }
    if(tempScores[3]!="null") { output4 = tempScores[3]; }
    if(tempScores[4]!="null") { output5 = tempScores[4]; }
    if(tempScores[5]!="null") { output6 = tempScores[5]; }

    return (
        <div id="score-sheer">
            <h2>Scoring Categories</h2>
            <ul>
                <li><button class="buttonScores" value="1s" onClick={handleScoreClick}>1s - 0</button> {output1}</li>
                <li><button class="buttonScores"  value="2s" onClick={handleScoreClick}>2s - 0</button> {output2}</li>
                <li><button class="buttonScores"  value="3s" onClick={handleScoreClick}>3s - 0</button> {output3}</li>
                <li><button class="buttonScores"  value="4s" onClick={handleScoreClick}>4s - 0</button> {output4}</li>
                <li><button class="buttonScores"  value="5s" onClick={handleScoreClick}>5s - 0</button> {output5}</li>
                <li><button class="buttonScores"  value="6s" onClick={handleScoreClick}>6s - 0</button> {output6}</li>
                <li>Bonus</li>
                <li>Upper Total</li>


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