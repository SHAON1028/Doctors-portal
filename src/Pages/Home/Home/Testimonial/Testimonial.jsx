import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const testimonialData = [
        {
            _id:1,
            name:'Winson Herry',
            img:people1,
            location:"california",
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:2,
            name:'Winson Herry',
            img:people2,
            location:"california",
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:3,
            name:'Winson Herry',
            img:people3,
            location:"california",
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]
    return (
       <section>
            <div className='flex items-center justify-between'>
                    <div>
                        <div className="text-xl text-primary font-bold">Testimonial</div>
                        <h2 className="text-4xl">What Our Patients Says</h2>
                    </div>
                    <figure>
                        <img className='lg:w-[192px] w-24 h-[156px]' src={quote}  alt="" />
                    </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        testimonialData.map(review=><Review review={review} key={review._id}></Review>)
                    }
            </div>
       </section>
    );
};

export default Testimonial;