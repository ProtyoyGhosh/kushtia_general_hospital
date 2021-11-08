import { Alert, Button, Container, Grid, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import img from '../../../images/login.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, signinWithGoogle } = useAuth();
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password);
    }
    const handleGoogleSignin = () => {
        signinWithGoogle()
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 8 }}>
                <Grid item xs={6} md={8}>
                    <Typography variant="h6" sx={{ color: 'info.main', fontWeight: '600' }} gutterBottom component="div">
                        Please Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            onBlur={handleOnchange}
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name='password'
                            onBlur={handleOnchange}
                            label="Your Password"
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Log In</Button>

                        <Link style={{ textDecoration: 'none' }} to='/register'><Button variant="text">New here? Please Register</Button></Link>
                    </form>

                    {user?.email && <Alert severity="success">User logged in SUCCESSFULLY!!</Alert>
                    }

                    ..................................OR..................................<br />
                    <Button onClick={handleGoogleSignin} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Google Signin</Button>
                </Grid>

                <Grid item xs={6} md={4}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;