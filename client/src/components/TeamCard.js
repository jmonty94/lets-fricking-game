import * as React from 'react';
import { Button, CardActionArea, CardActions, Typography, CardMedia, Card, CardContent } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import destiny from '../gameImages/destiny.jpeg';
import madden from '../gameImages/madden.jpeg';
import nba2k from '../gameImages/nba2k.jpeg';
import warzone from '../gameImages/warzone.jpeg';
import wow from '../gameImages/wow.jpeg';

import {useMutation} from '@apollo/client';
import { JOIN_TEAM } from '../utils/mutations';

import auth from '../utils/auth';


const TeamCard = (props) => {
    const [joinTeam, {error, data}] = useMutation(JOIN_TEAM, {
        variables: {
            teamId: props.data._id,
        }
    });

    const handleJoin = async () => {
        try {
            console.log('hit');
            console.log(props.data._id)
            const {data} = await joinTeam({teamId: props.data._id});
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    let gameImg;
    switch (props.data.game) {
        case 'Destiny':
            gameImg = destiny;
            break;
        case 'Madden':
            gameImg = madden;
            break;
        case 'NBA2K':
            gameImg = nba2k;
            break;
        case 'Warzone':
            gameImg = warzone;
            break;
        case 'WOW':
            gameImg = wow;
            break;
    
        default:
            break;
    }
    


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={gameImg}
                    alt="game img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.data.deviceType} Group
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Skill Level: {props.data.skill}
                    </Typography>
                    <Typography variant="h7" component="div">
                        {[...Array(props.data.squadMembers.length)].map((x, i) =>
                            <PersonIcon key={i} />
                        )}
                        {[...Array(props.data.squadSize - props.data.squadMembers.length)].map((x, i) =>
                            <PersonOutlineIcon key={i} />
                        )}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {auth.loggedIn() ? (
                <CardActions>
                    {props.data.squadSize - props.data.squadMembers.length === 0 ? (
                        <Button size="small" color="primary" disabled>
                            Full Squad
                        </Button>
                    ) : (
                        <>
                            {/* if already on team  */}
                            {auth.getProfile()?.currentTeam?._id === props.data._id ? (
                                <Button size="small" color="primary" disabled>
                                    Already on this team
                                </Button>
                            ) : (
                                <Button size="small" color="primary" onClick={handleJoin}>
                                    Join Team
                                </Button>
                            )}
                            
                        </>
                    )}
                </CardActions>
            ) : (
                <></>
            )}
            
        </Card>
    );
}

export default TeamCard;