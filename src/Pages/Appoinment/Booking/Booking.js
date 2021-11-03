import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Booking = (props) => {
    const { name, time, space } = props.booking;
    return (

        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography sx={{ color: 'info.main', fontWeight: '600' }} variant="h5" component="div" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="p" component="div" gutterBottom>
                    {time}
                </Typography>
                <Typography sx={{ color: 'error.main' }} variant="h6" component="div" gutterBottom>
                    Available Space: {space}
                </Typography>
                <Button variant="contained">Get Appoinment</Button>

            </Paper>
        </Grid>

    );
};

export default Booking;