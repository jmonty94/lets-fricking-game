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

    return (
        <div>
            <TeamCard data={getTeamData()}/>  
        </div>
    );
}


export default Home;
