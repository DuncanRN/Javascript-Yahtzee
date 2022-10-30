import React from 'react';

const ScoreSheet = ({scores, currentRoll, setScore}) => {



    const handleScoreClick = function(event) {
        setScore(event.target.value);

    };

    return (
        <div id="score-sheer">
            <h2>Scoring Categories</h2>
            <ul>
                <li><button class="buttonScores" value="1s" onClick={handleScoreClick}>1s - 0</button></li>
                <li><button class="buttonScores"  value="2s" onClick={handleScoreClick}>2s - 0</button></li>
                <li><button class="buttonScores"  value="3s" onClick={handleScoreClick}>3s - 0</button></li>
                <li><button class="buttonScores"  value="4s" onClick={handleScoreClick}>4s - 0</button></li>
                <li><button class="buttonScores"  value="5s" onClick={handleScoreClick}>5s - 0</button></li>
                <li><button class="buttonScores"  value="6s" onClick={handleScoreClick}>6s - 0</button></li>
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