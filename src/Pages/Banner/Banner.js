import React from 'react';
import Container from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../images/chair.png';
import Button from '@mui/material/Button';
import bg from '../../images/bg.png';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const banner = {
    background: `url(${bg})`

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400

}

const Banner = () => {
    return (
        <Container style={banner} sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{ fontWeight: 600, color: 'black', p: 4 }} >
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant="p" sx={{ color: 'gray', fontSize: 14, fontWeight: 500, ml: 4 }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                            Lorem ipsum
                        </Typography> <br />
                        <Button sx={{ mt: 4, ml: 4 }} variant="contained">Get Appoinment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6} >
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container >

    );
};

export default Banner;