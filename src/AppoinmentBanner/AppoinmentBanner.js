import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../images/doctor.png';
import bg from '../images/appointment-bg.png';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const banner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity'
};

const AppoinmentBanner = () => {
    return (
        <Box style={banner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ width: '400px', marginTop: '-120px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                    <Box >
                        <Typography sx={{ color: 'info.main', mb: 5 }} style={{ fontSize: '18px', fontWeight: '500' }} variant="h6">
                            Appoinment
                        </Typography>
                        <Typography sx={{ color: 'white', mb: 2 }} style={{ fontSize: '28px', fontWeight: '700' }} variant="h5">
                            Make an Appoinment Today
                        </Typography>
                        <Typography style={{ fontSize: '15px', fontWeight: '400' }} sx={{ color: 'white', my: 2 }} variant="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio soluta quia fuga nulla provident, adipisci officiis vel praesentium hic. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, sint.
                        </Typography>
                        <br />
                        <Button variant="contained" sx={{ mt: 4 }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;