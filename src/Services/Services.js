import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import cavity from '../../src/images/cavity.png';
import whitening from '../../src/images/whitening.png';
import fluoride from '../../src/images/fluoride.png';
import Service from '../Service/Service';



const services = [
    {
        name: 'Fluoride Treatment',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error pariatur nostrum iure atque ipsam vero et, temporibus modi? Recusandae?",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error pariatur nostrum iure atque ipsam vero et, temporibus modi? Recusandae?",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error pariatur nostrum iure atque ipsam vero et, temporibus modi? Recusandae?",
        img: whitening
    }
]

const Services = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600, color: 'primary.main', m: 4 }} variant="h4" component="div">
                SERVICES WE PROVIDE
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service =>
                                <Service
                                    key={service.name}
                                    service={service}
                                ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </Container>
    );
};

export default Services;