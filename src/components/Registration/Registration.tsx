import {
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
    Alert,
  } from "@mui/material";
  import React, { useState } from "react";
  import { NavLink, useNavigate } from "react-router-dom";
//   import useAuth from "../../../hooks/useAuth";
  import login from "./4957136.jpg";

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    // const { registerUser, isLoading, user, authError } = useAuth();
    const history = useNavigate();
  
    // const handleOnBlur = (e) => {
    //   const field = e.target.name;
    //   const value = e.target.value;
    //   const newLoginData = { ...loginData };
    //   newLoginData[field] = value;
    //   setLoginData(newLoginData);
    // };
  
    // const handleLoginSubmit = (e) => {
    //   if (loginData.password !== loginData.password2) {
    //       alert("Your password didn't match")
    //       return;
    //   }
    //   registerUser(loginData.email, loginData.password, loginData.name, history);
    //   e.preventDefault();
    // };
  
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} sm={12} md={6}>
            <Typography style={{marginLeft:"9px"}} variant="body1" gutterBottom>
              Register
            </Typography>
            {/* {isLoading ? 
              <CircularProgress></CircularProgress>
            :  */}
                {/* onSubmit={handleLoginSubmit} */}
              <form >
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  name="name"
                //   onBlur={handleOnBlur}
                  label="Your Name"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  type="email"
                  id="standard-basic"
                  name="email"
                //   onBlur={handleOnBlur}
                  label="Your Email"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  name="password"
                //   onBlur={handleOnBlur}
                  label="Your Password"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  name="password2"
                //   onBlur={handleOnBlur}
                  label="Retype Your Password"
                  variant="standard"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "75%", m: 1 }}
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">Already Registered? Please Login</Button>
                </NavLink>
              </form>
            {/* )} */}
            {/* {user?.email && (
              <Alert severity="success">User Created Successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>} */}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
  };

export default Registration;