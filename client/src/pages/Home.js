// imports

import { useState } from "react";
import TeamCard from "../components/TeamCard";

const Home = () => {
    const [homeState, setHomeState] = useState();
    const handleChange = (event) => {

    }

    const getTeamData = () => {
        const data = {
            name: 'Jacks Squad',
            squadSize: 5,
            game: 'Warzone',
            deviceType: 'Xbox',
            skill: 'Noobs',
            squadMembers: [{}, {}, {}]
        }
        return data;
    }
    const data = {
        name: 'Jacks Squad',
        squadSize: 5,
        game: 'Warzone',
        deviceType: 'Xbox',
        skill: 'Noobs',
        squadMembers: [{}, {}, {}]
    }

    return (
        <div>
            <TeamCard data={data}/>  
        </div>
    );
}


export default Home;
