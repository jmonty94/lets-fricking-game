// imports
import { useState } from "react";

import TeamCard from "../components/TeamCard";
import * as React from 'react';
import {CircularProgress, Box, Grid} from '@mui/material';


import { useQuery } from '@apollo/client';
import { QUERY_TEAMS } from "../utils/queries";


const Home = () => {
    const {loading, data} = useQuery(QUERY_TEAMS);

    return (
        
        <div style={{marginTop: '10px'}}>
            {loading ? (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {data.teams.map(teamData => {
                        return (
                            <Grid item xs="auto" key={teamData.teamId}>
                                <TeamCard data={teamData}/> 
                            </Grid> 
                        );     
                    })}
                </Grid>
            )}   
        </div>
    );
}


export default Home;
