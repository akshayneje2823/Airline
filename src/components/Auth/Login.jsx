import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin, userName } from '../../redux/AirlineSlice';
import './login.css'

function Login() {

  const clientId = "340050983213-gtp9vgb4nai054uknt7ne9e1s8822gf2.apps.googleusercontent.com";

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onLoginSuccess = (res) => {
    console.log("login successful");
    console.log(res);
    localStorage.setItem("user", JSON.stringify(res.accessToken));
    dispatch(userLogin(true));
    dispatch(userName(res.profileObj.name))
    navigate('/');
  }

  const handleLoginFailure = (res) => {
    console.log(res)
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className='ml-5 text-center'>
            <GoogleLogin
              clientId={clientId}
              buttonText='Login'
              onSuccess={onLoginSuccess}
              onFailure={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              responseType='code,token'
            />
            </div>
            <div className="form-group mt-3">

              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="/">password?</a>
            </p>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login