import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const TeamCard = (props) => {

    const handleJoin = () => {
        
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="img src"
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