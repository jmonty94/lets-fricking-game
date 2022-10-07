import { useState } from "react";

// mui
import * as React from "react";
import { Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { redirect } from "react-router-dom";


const CreateTeam = () => {
    const [formState, setFormState] = useState({
        name: "",
        squadSize: "",
        game: "",
        deviceType: "",
        skill: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        // handle login submit with graphql
            // const token = Auth.loggedIn()?Auth.getToken(): null;
            // if (!user) {
            //     return redirect("/login");
            // }

            // try {
            //     const data = await addTeam({
            //         var: {
            //             ...formState
            //         }
            //     });
            // } catch(err) {
            //     console.error(err);
            // }
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item xs={12}>
                <h1>Create Team</h1>
            </Grid>

            <Grid item xs={12}>
                <TextField
                    id="standard-basic"
                    label="Team-name"
                    variant="standard"
                    onChange={() => {
                        handleChange();
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Team Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formState.squadSize}
                        label="Squad Size"
                        onChange={handleChange}
                    >
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Game Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formState.game}
                        label="Size"
                        onChange={handleChange}
                    >
                        <MenuItem value={"WOW"}>WOW</MenuItem>
                        <MenuItem value={"NBA2K"}>NBA2K</MenuItem>
                        <MenuItem value={"Destiny"}>Destiny</MenuItem>
                        <MenuItem value={"Warzone"}>Warzone</MenuItem>
                        <MenuItem value={"Madden"}>Madden</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Device Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formState.deviceType}
                        label="Size"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Cross-Console"}>Cross-Console</MenuItem>
                        <MenuItem value={"XBox"}>XBox</MenuItem>
                        <MenuItem value={"PSN"}>PSN</MenuItem>
                        <MenuItem value={"Steam"}>Steam</MenuItem>
                        <MenuItem value={"Nintendo"}>Nintendo</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formState.skill}
                        label="Skill"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Noobs"}>Noob</MenuItem>
                        <MenuItem value={"Pros"}>Casual</MenuItem>
                        <MenuItem value={"Pros+"}>Pro</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={handleSubmit()}>
                    Create Team
                </Button>
            </Grid>
            <Grid sx={{ bottom: "2px" }}>Don't have an account? Click below</Grid>
        </Grid>
    );
};


export default CreateTeam;

