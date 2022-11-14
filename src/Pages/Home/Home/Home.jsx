import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Contactus from '../ContactUS/Contactus';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import SecondBanner from '../SeondBanner/SecondBanner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <SecondBanner></SecondBanner>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <Contactus></Contactus>
        </div>
    );
};

export default Home;