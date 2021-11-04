import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box component="form"
                sx={style}>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
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
                    defaultValue='Your Name'
                    size="small"
                    variant="standard"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}

                    id="standard-size-small"
                    defaultValue='Your Email'
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

                <Button sx={{ m: 2 }} variant="contained">Confirm</Button>

            </Box>
        </Modal>
    );
};

export default BookingModal;