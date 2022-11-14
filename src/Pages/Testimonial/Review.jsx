import React from 'react';

const Review = ({ review }) => {
    const { img, name, review: userReview, location } = review
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">

                    <p>{userReview}</p>
                    <div className="flex items-center gap-4 mt-6 ">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-lg'>{name}</h2>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review; 