import { Button, Box, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Table, Typography, } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import Auth from './../utils/auth'

const Profile = () => {
    const [formState, setFormState] = useState({});
    const handleTextChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const getProfile = () => {
        return {
            username: '',
            email: '',
            xboxUsername: '',
            psnUsername: '',
            steamUsername: '',
            nintendoUsername: '',
            currentTeam: '',
        }
    }

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
        <Box sx={{ display: 'block', justifyContent: 'center', textAlign: 'center', width:  '75%', m: 'auto' }}>
            <Typography variant='h3' component='h1'>Welcome to your profile</Typography>
            <TableContainer component={Paper} m='auto'>
                <Table sx={{ m: 10}}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: '50%' }}>Field</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell >
                                    {row.value}
                                </TableCell>
                                {row.name !== "Username" && row.name !== 'Email' 
                                ? <Button onClick={console.log('hit')}><EditIcon></EditIcon></Button>
                                : <></>
                                }
                                
                                
                                
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <Typography variant="h4" component='h1'>Welcome to your Profile </Typography>
            <Box sx={{m: 5, p: 2}}>
                <Typography variant="h6" component='h3' sx={fieldStyling}>Current Team:</Typography>
                <Typography variant="h6" component='h3' sx={fieldStyling}>Username: </Typography>
                <Typography variant="h6" component='h3' sx={fieldStyling}>Xbox Username: </Typography>
                <Typography variant="h6" component='h3' sx={fieldStyling}>Playstation Username:</Typography>
                <Typography variant="h6" component='h3' sx={fieldStyling}>Steam Username:</Typography>
                <Typography variant="h6" component='h3' sx={fieldStyling}>Nintendo Username:</Typography>
            </Box> */}
                </Table>
            </TableContainer>
        </Box>

    );
}

export default Profile;