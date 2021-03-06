import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ open, handleClose, booking, date }) => {
    const { name, time, space } = booking;
    const { user } = useAuth();

    const handleConfirmBooking = e => {
        alert('conferming')
        e.preventDefault();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleConfirmBooking}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        id="standard-size-small"
                        label='Appointed Time:'
                        defaultValue={time}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}

                        id="standard-size-small"
                        defaultValue={user?.displayName}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}

                        id="standard-size-small"
                        defaultValue={user?.email}
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}

                        id="standard-size-small"
                        defaultValue="Phone Number"
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        id="standard-size-small"
                        label='Appointed on'
                        defaultValue={date.toDateString()}
                        size="small"
                        variant="standard"
                    />

                    <Button type="submit" sx={{ m: 2 }} variant="contained">Confirm</Button>
                </form>

            </Box>
        </Modal>
    );
};

export default BookingModal;