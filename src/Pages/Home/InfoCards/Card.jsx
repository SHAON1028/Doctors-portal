import React from 'react';

const Card = ({card}) => {
    const{name,description,icon,bgClass} = card
    return (
<<<<<<< HEAD
        <div>
<div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
=======
        <div className=''>
{/* <div className={`card  ${bgClass} shadow-xl text-white p-6`}> */}
        <div className={`card text-white p-6 lg:card-side shadow-xl ${bgClass}`}>
>>>>>>> 1298481 (appointment)
  <figure><img src={icon} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
        </div>
    );
};

export default Card;