import { Button, Container, Grid, Alert } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import img from '../../../images/login.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        e.preventDefault();

        registerUser(loginData.name, loginData.email, loginData.password);
    };

    return (
        <Container>
            <Grid container spacing={2} sx={{ mt: 8 }}>
                <Grid item xs={6} md={8}>
                    <Typography variant="h6" sx={{ color: 'info.main', fontWeight: '600' }} gutterBottom component="div">
                        Please Register
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type='email'
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            label="Your Password"
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name='Confirmpassword'
                            onBlur={handleOnBlur}
                            label="Confirm Password"
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                        <Link style={{ textDecoration: 'none' }} to='/login'><Button variant="text">Already Registered? Please Login</Button></Link>


                    </form>
                    {user?.email && <Alert severity="success">User Created SUCCESSFULLY!!</Alert>
                    }

                </Grid>

                <Grid item xs={6} md={4}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;