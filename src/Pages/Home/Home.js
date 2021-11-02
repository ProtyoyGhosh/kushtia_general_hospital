import React from 'react';
import AppoinmentBanner from '../../AppoinmentBanner/AppoinmentBanner';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;