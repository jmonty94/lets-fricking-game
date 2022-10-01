import{ useParams} from 'react-router-dom'

const Profile = () => {
const {userId}=useParams()
  return (
    <main>
        <div>
            {/* Only should render upon Header button click / First Page Load */}
        <h1>Your Profile!</h1>
        </div>
    </main>
  );
};

export default Profile;
