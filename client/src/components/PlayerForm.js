import {useState} from "react";
import YahtzeeService from "../services/YahtzeeService"; //NEED TO ADD FUNCTION TO YAHTZEE SERVICE - DONE

//WE WANT TO NOT ADD NEW ENTRIES TO THE DATABASE BUT ONLY ALLOW PEOPLE TO CHANGE THE NAMES OF 
//PLAYER 1, 2 ETC - THIS IS A NON RELATIONAL DB REMEMBER.
//THIS WOULD JUST BE AN UPDATE SITUATION IF WE DO THIS - NOT ADD ADD SITUATION.
//OTHER OPTION IF POSSIBLE WOULD BE TO STOP ANYMORE THAN 6 PLAYERS BEING ADDED TO DB?


const PlayerForm = ({updatePlayer, postPlayer, setPlayersNamesFromForm}) =>{  //NEED TO WRITE THIS FUNCTION IN CONTAINER - NOT DONE
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormData={}
        newFormData["player_name1"]=formData.player_name1;
        newFormData["player_name2"]=formData.player_name2;
        newFormData["player_name3"]=formData.player_name3;
        newFormData["player_name4"]=formData.player_name4;
        newFormData["player_name5"]=formData.player_name5;
        newFormData["player_name6"]=formData.player_name6;

        setPlayersNamesFromForm(newFormData);
        console.log(newFormData["player_name1"])

        // postPlayer(newFormData).then((data) => {
        //     updatePlayer(data);
        // });
    }

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
        <form className="player-form" onSubmit={handleSubmit} method="post">
            <input  onChange={onChange}type="text" id="player_name1" v-model="player_name" placeholder="Player Name" required/>

            <input  onChange={onChange}type="text" id="player_name2" v-model="player_name" placeholder="Player Name" />

            <input  onChange={onChange}type="text" id="player_name3" v-model="player_name" placeholder="Player Name" />

            <input  onChange={onChange}type="text" id="player_name4" v-model="player_name" placeholder="Player Name" />

            <input  onChange={onChange}type="text" id="player_name5" v-model="player_name" placeholder="Player Name" />

            <input  onChange={onChange}type="text" id="player_name6" v-model="player_name" placeholder="Player Name" />

            <input className="roll-dice-button" type="submit" value="Save" id="save"/>

        </form>
    )
}
export default PlayerForm;