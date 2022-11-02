// import {useState} from "react";
// import {updatePlayer} from "./YahtzeeService"; //NEED TO ADD FUNCTION TO YAHTZEE SERVICE - DONE

//WE WANT TO NOT ADD NEW ENTRIES TO THE DATABASE BUT ONLY ALLOW PEOPLE TO CHANGE THE NAMES OF 
//PLAYER 1, 2 ETC - THIS IS A NON RELATIONAL DB REMEMBER.
//THIS WOULD JUST BE AN UPDATE SITUATION IF WE DO THIS - NOT ADD ADD SITUATION.
//OTHER OPTION IF POSSIBLE WOULD BE TO STOP ANYMORE THAN 6 PLAYERS BEING ADDED TO DB?


// const PlayerForm = ({updatePlayer}) =>{  //NEED TO WRITE THIS FUNCTION IN CONTAINER - NOT DONE
//     const [formData, setFormData] = useState({});

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newFormData={}
//         newFormData["player_name"]=formData.player_name; // ADD NAME TO DB AS player_name - NOT DONE
//         postPlayer(newFormData).then((data) => {
//             updatePlayer(data);
//         });
//     }

//     const onChange = (e) => {
//         formData[e.target.id] = e.target.value;
//         setFormData(formData);
//     }

//     return (
//         <form className="" onSubmit={handleSubmit} method="post">
//             <label htmlFor="player_name">Player Name:</label>
//             <input  onChange={onChange}type="text" id="player_name" v-model="player_name" required/>

//             <input type="submit" value="Save" id="save"/>

//         </form>
//     )
// }
// export default PlayerForm;