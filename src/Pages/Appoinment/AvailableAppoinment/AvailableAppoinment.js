import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM -10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '09.00 AM -11.00 AM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '10.30 AM -11.30 AM',
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM -07.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM -08.00 PM',
        space: 15
    },
]

const AvailableAppoinment = ({ date }) => {
    return (
        <Container>
            <Typography sx={{ color: 'error.main', fontWeight: '600', pb: 2 }} variant="h5" component="div" gutterBottom>
                Available Appoinment on: {date.toDateString()}
            </Typography>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;