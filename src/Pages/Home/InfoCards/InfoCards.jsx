import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import markar from '../../../assets/icons/marker.svg'
import Card from './Card';

const InfoCards = () => {
    const cardData = [
        {
            id:1,
            name:'Opening Hours',
            description: 'open 9.00 am to 5.00 pm everyday',
            icon:clock,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name:'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon:markar,
            bgClass:'bg-neutral'
        },
        {
            id:3,
            name:'Contact us now',
            description: '+000 123 456789',
            icon:phone,
            bgClass:'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {cardData.map(card=><Card card={card} key={card.id}></Card>)}
        </div>
    );
};

export default InfoCards;