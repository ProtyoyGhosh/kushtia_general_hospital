import { Button, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import img from '../../../images/login.png';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        e.preventDefault();
        alert('hello')
    }
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
                            label="Your Email"
                            name='email'
                            onChange={handleOnchange}
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name='password'
                            onChange={handleOnchange}
                            label="Your Password"
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="password"
                            name='password2'
                            onChange={handleOnchange}
                            label="Confirm Password"
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                        <Link style={{ textDecoration: 'none' }} to='/login'><Button variant="text">Already Registered? Please Login</Button></Link>
                    </form>
                </Grid>

                <Grid item xs={6} md={4}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;