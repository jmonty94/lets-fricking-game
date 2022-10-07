// imports
import { Grid } from "@mui/material";

import { useState } from "react";
import TeamCard from "../components/TeamCard";

const Home = () => {
    const [homeState, setHomeState] = useState();
    
    const handleChange = (event) => {

    }

    const getTeamsData = () => {
        const teamsData = [
            {
                teamId: '7362976312863198',
                name: 'Jacks Squad',
                squadSize: 5,
                game: 'warzone',
                deviceType: 'Xbox',
                skill: 'Noobs',
                squadMembers: [{}, {}, {}]
            },
            {
                teamId: '9962977382879238',
                name: 'Moussas Squad',
                squadSize: 2,
                game: 'madden',
                deviceType: 'Cross Console',
                skill: 'Pros',
                squadMembers: [{},]
            },
        ]
        return teamsData;
    }

    return (
        <div style={{marginTop: '10px'}}>
            <Grid container spacing={2}>
                {getTeamsData().map(teamData => {
                    return (
                        <Grid item xs="auto" key={teamData.teamId}>
                            <TeamCard data={teamData}/> 
                        </Grid> 
                    );     
                })}
            </Grid>
        </div>
    );
}


export default Home;
