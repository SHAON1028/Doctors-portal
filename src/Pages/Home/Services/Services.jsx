import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity
        },
        {
            id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening
        },
    ]
    return (
        <div className='mt-[130px]'>
            <div className='text-center'>
                <h2 className='text-secondary uppercase text-xl font-bold'>OUR SERVICES</h2>
                <p className='text-4xl'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    serviceData.map(service=><Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;