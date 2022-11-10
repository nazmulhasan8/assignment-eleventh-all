import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import NewSection from '../NewSection/NewSection';
import SeeAll from '../SeeAll/SeeAll';
import ServicesHome from '../ServicesHome/ServicesHome';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Yummy Food | Home</title>
      </Helmet>
        <div>
            <Banner></Banner>
            <NewSection></NewSection>
            <About></About>
            <ServicesHome></ServicesHome>
            <SeeAll></SeeAll>

        </div>
        </div>
    );
};

export default Home;