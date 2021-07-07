import { useParams } from "react-router-dom";



const Profile = () => {

    const {username} = useParams();



    return(
        <div>
            <h1>Profile page</h1>
            <h1>{username}</h1>
        </div>
    );
}

export default Profile;