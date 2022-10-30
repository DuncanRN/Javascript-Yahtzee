import React from 'react';

const ScoreSheet = ({scores, currentRoll, setScore}) => {



    const handleScoreClick = function(event) {
        setScore(event.target.value);

    };

    const tempScores = scores.map(score => score);


    // console.log("tempScores[0] is");
    // console.log(tempScores[0]);

    // console.log("tempScores[1] is");
    // console.log(tempScores[1]);


    var button1 = "";
    var button2 = "";
    var button3 = "";
    var button4 = "";
    var button5 = "";
    var button6 = "";

    if(tempScores[0]!==null) { 
        button1 = "1s : "+ tempScores[0];
        console.log("in tempscores !==null 1s")
    }

    if(tempScores[1]!==null) { 
        button2 = "2s : "+ tempScores[1];
        console.log("in tempscores !==null  2s")
    }

    if(tempScores[2]!==null) { 
        button3 = "3s : "+ tempScores[2];
        console.log("in tempscores !==null  3s")
    }

    if(tempScores[3]!==null) { 
        button4 = "4s : "+ tempScores[3];
        console.log("in tempscores !==null  4s")
    }
    
    if(tempScores[4]!==null) { 
        button5 = "5s : "+ tempScores[4];
        console.log("in tempscores !==null  5s")
    }

    if(tempScores[5]!==null) { 
        button6 = "6s : "+ tempScores[5];
        console.log("in tempscores !==null  5s")
    }


    return (
        <div id="score-sheer">
            <h2>Scoring Categories</h2>
            <ul>
                <li><button class='buttonScores' value='1s' onClick={handleScoreClick}>1s - 0</button>{button1}</li>
                <li><button class="buttonScores"  value="2s" onClick={handleScoreClick}>2s - 0</button>{button2}</li>
                <li><button class="buttonScores"  value="3s" onClick={handleScoreClick}>3s - 0</button>{button3}</li>
                <li><button class="buttonScores"  value="4s" onClick={handleScoreClick}>4s - 0</button>{button4}</li>
                <li><button class="buttonScores"  value="5s" onClick={handleScoreClick}>5s - 0</button>{button5}</li>
                <li><button class="buttonScores"  value="6s" onClick={handleScoreClick}>6s - 0</button>{button6}</li>
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