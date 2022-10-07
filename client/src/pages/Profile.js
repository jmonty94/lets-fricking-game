import { Button } from "@mui/material";
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { EDIT_PROFILE } from '../utils/mutations';

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
            psnUsername: null,
            steamUsername: null,
            nintendoUsername: null,
            currentTeam: '',
        }
    }

    const handleEdit = () => {

    }

    return (
        <div>
        </div>
    );
}

export default Profile;