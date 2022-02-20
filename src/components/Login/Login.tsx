import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import login from './undraw_Login_re_4vu2.png';
// import loginImg from '.'

const Login = () => {
    // const [loginData, setLoginData] = useState({});
    // const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useNavigate();

    // const handleOnChange = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = {...loginData}
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData)
    // }

    // const handleLoginSubmit = e => {
    //     loginUser(loginData.email, loginData.password, location, history)
    //     e.preventDefault();
    // }

    // const handleGoogleSignIn = () => {
    //   signInWithGoogle(location, history);
    // }

    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} sm={12} md={6}>
            <Typography style={{marginLeft:"9px"}} variant="body1" gutterBottom>
              Login
            </Typography>
            {/* {!isLoading && ( */}
              <form >
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  name="email"
                  type="email"
                //   onChange={handleOnChange}
                  label="Your Email"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  name="password"
                //   onChange={handleOnChange}
                  label="Your Password"
                  variant="standard"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "75%", m: 1 }}
                >
                  Login
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User? Please Register</Button>
                </NavLink>
                {/* {isLoading && <CircularProgress></CircularProgress>}
                {user?.email && (
                  <Alert severity="success">Login Successfully</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
                <p>-----------------------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained">
                  Google Sign In
                </Button> */}
              </form>
            {/* )} */}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;