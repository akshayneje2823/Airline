import React from 'react'
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login'
// import { GoogleLogin, GoogleLogout } from 'react-google-login'
import {GoogleLogin} from '@react-oauth/google';


function Login() {

  const clientId = "340050983213-gtp9vgb4nai054uknt7ne9e1s8822gf2.apps.googleusercontent.com";

  //on successful login
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
  }

  // login failure
  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  }

  const onSignOutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
  }

  return (
    <div>
      {/* <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={onSignOutSuccess}
      >
      </GoogleLogout>  */}

      {/* <LoginSocialGoogle
        client_id={clientId}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle> */}





      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;



    </div>
  )
}

export default Login