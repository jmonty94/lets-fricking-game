import { Button, Box, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Table, Typography, } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import Auth from './../utils/auth'
import {useQuery} from '@apollo/client';
import { QUERY_ME } from "../utils/queries";

const Profile = () => {
    const [formState, setFormState] = useState({});
    const handleTextChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const {loading, data} = useQuery(QUERY_ME);

    const handleEdit = () => {

    }

    function createTable(name, value) {
        return { name, value }
    }

    const rows = [
        createTable("Username", "test"),
        createTable("Email", "email"),
        createTable("Xbox Username", "Xbox Username"),
        createTable("Playstation Username", "Playstation Username"),
        createTable("Steam Username", "Steam Username"),
        createTable("Nintendo Username", "Nintendo Username"),
        createTable("Current Team", "Current Team"),
    ]

    return (
        <div>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <Box sx={{ display: 'block', justifyContent: 'center', textAlign: 'center', width:  '75%', m: 'auto' }}>
                    <Typography variant='h3' component='h1' sx={{mb:5}}>Hey {data.me.username}</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '30%', textAlign: 'center' }}>Field</TableCell>
                                    <TableCell sx={{ width: '30%', textAlign: 'center' }}>Value</TableCell>
                                    <TableCell sx={{ width: '30%', textAlign: 'center' }}>Update</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        
                                    >
                                        <TableCell component='th' scope='row' sx={{textAlign: 'center'}}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell sx={{textAlign: 'center'}}>
                                            {row.value}
                                        </TableCell>
                                        {row.name !== "Username" && row.name !== 'Email' 
                                    ? <Button sx={{ justifyContent: 'flex-end',}} onClick={console.log(data)}><EditIcon></EditIcon></Button>
                                    : <></>
                                    }
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </div>
        
        

    );
}

export default Profile;