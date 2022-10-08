import { useQuery } from '@apollo/client';
import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import { QUERY_MY_TEAM } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';

import destiny from '../gameImages/destiny.jpeg';
import madden from '../gameImages/madden.jpeg';
import nba2k from '../gameImages/nba2k.jpeg';
import warzone from '../gameImages/warzone.jpeg';
import wow from '../gameImages/wow.jpeg';


const CurrentTeam = () => {
    const { loading, data } = useQuery(QUERY_MY_TEAM);
    console.log(data);
    function createImg (data)  {
        let gameImg;
        switch (data) {
            case 'Destiny':
                return gameImg = destiny;
            case 'Madden':
                return gameImg = madden;
            case 'NBA2K':
                return gameImg = nba2k;
            case 'Warzone':
                return gameImg = warzone;
            case 'WOW':
                return gameImg = wow;

            default:
                break;
        }
    }
    return (
        <div>
            {loading ? (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ m: 5 }}>
                    <Card sx={{ display: 'block', justifyContent: 'center', textAlign: 'center', width: "75%", m: 'auto' }}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='35%'
                                image={createImg(data.myTeam.game)}

                            />
                            <CardContent>
                            <Typography variant='h2' component='h1'>{data.myTeam.name}</Typography>
                            <Typography variant='h3' component='h2'>{data.myTeam.game}</Typography>
                            <Typography>{data.myTeam.deviceType}</Typography>

                            {/* may be null for owner */}
                            <Typography>{data.myTeam.owner.username}</Typography>
                            {data.myTeam.squadMembers.map(squadMember => (
                                console.log(squadMember)
                            ))}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            )}
        </div>
    );
}

export default CurrentTeam;