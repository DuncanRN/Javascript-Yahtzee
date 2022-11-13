import React from 'react';
import ScoreCategoryTr from './ScoreCategoryTr';

const ScoreSheet = ({scores1, scores2, scores3, scores4, scores5, scores6, currentRoll, playersNames, setScore}) => {

    // map scores into tempScores
    const tempScores1 = scores1.map(score => score);
    const tempScores2 = scores2.map(score => score);
    const tempScores3 = scores3.map(score => score);
    const tempScores4 = scores4.map(score => score);
    const tempScores5 = scores5.map(score => score);
    const tempScores6 = scores6.map(score => score);
    
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

                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default ScoreSheet;