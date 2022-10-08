import {useQuery} from '@apollo/client';
import { QUERY_MY_TEAM } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';


const CurrentTeam = () => {
    const {loading, data} = useQuery(QUERY_MY_TEAM);
    
    return (
        <div>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    <h1>{data.myTeam.name}</h1>
                    <h1>{data.myTeam.game}</h1>
                    <h1>{data.myTeam.deviceType}</h1>
                    
                    {/* may be null for owner */}
                    <h1>{data.myTeam.owner.username}</h1> 
                    <h1></h1>
                </div>
            )}
        </div>
    );
}

export default CurrentTeam;