import React from 'react';
import {  GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin, userName } from '../../redux/AirlineSlice';


function Logout() {
    const clientId = "340050983213-gtp9vgb4nai054uknt7ne9e1s8822gf2.apps.googleusercontent.com";
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logoutHandler = (res) => {
        console.log("logout.........")
        localStorage.removeItem("user");
        dispatch(userLogin(false))
        navigate('/login');
        dispatch(userName(''))
        
        
    }

    const handleLogoutFailure = (res) => {
        console.log(res)
    }
    return (
        <>
            <GoogleLogout
            className='float-end'
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={logoutHandler}
                onFailure={handleLogoutFailure}
            ></GoogleLogout>

        </>
    )
}

export default Logout