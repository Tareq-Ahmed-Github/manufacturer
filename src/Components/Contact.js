import React from 'react';
import InfoCard from './Home/InfoCard';
import clock from '../Components/Resources/clock-svgrepo-com.svg'
import marker from '../Components/Resources/location-svgrepo-com.svg'
import phone from '../Components/Resources/phone-call-svgrepo-com.svg'

const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 bg-violet-700 mt-20'>
                <InfoCard className='border border-black' cardTitle="ADRESS DETAILS" cardDes="183 Donato Parkways CA, United State" img={marker}></InfoCard>
                <InfoCard className='border border-black' cardTitle="PHONE NUMBER" cardDes="(+00)888.666.88" img={phone}></InfoCard>
                <InfoCard className='border border-black' cardTitle="WORKING TIME" cardDes="Mon - Fri: 9:00 - 19:00 Closed on Weekends" img={clock}></InfoCard>
            </div>
        </div>
    );
};

export default Contact;