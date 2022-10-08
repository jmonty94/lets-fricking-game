import {useQuery} from '@apollo/client';
import { QUERY_MY_TEAM } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';


const CurrentTeam = () => {
    const {loading, data} = useQuery(QUERY_MY_TEAM);
    console.log(data);

    return (
        <div>
            <h1>Hey</h1>
        </div>
    );
}

export default CurrentTeam;