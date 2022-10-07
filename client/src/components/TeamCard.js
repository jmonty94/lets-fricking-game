import * as React from 'react';
import { Button, CardActionArea, CardActions, Typography, CardMedia, Card, CardContent } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import destiny from '../gameImages/destiny.jpeg';
import madden from '../gameImages/madden.jpeg';
import nba2k from '../gameImages/nba2k.jpeg';
import warzone from '../gameImages/warzone.jpeg';
import wow from '../gameImages/wow.jpeg';


const TeamCard = (props) => {

    const handleJoin = () => {
        
    }

    let gameImg;
    switch (props.data.game) {
        case 'destiny':
            gameImg = destiny;
            break;
        case 'madden':
            gameImg = madden;
            break;
        case 'nba2k':
            gameImg = nba2k;
            break;
        case 'warzone':
            gameImg = warzone;
            break;
        case 'wow':
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
            <CardActions>
                <Button size="small" color="primary" onClick={() => {handleJoin()}}>
                    Join Team
                </Button>
            </CardActions>
        </Card>
    );
}

export default TeamCard;