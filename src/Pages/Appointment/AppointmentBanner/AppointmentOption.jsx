import React from 'react';

const AppointmentOption = ({ availableOption, setTreatment } ) => {
    const{name,slots} = availableOption
  
    return (
        <div>  
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl text-secondary">{name}</h2>
                    <p className='text-center'>
                        {slots.length>0 ? slots[0]:'Try another Day'}
                        
                    </p>
                    <p className='text-center'> 
                    {slots.length} {slots.length===1 ? 'spaces' : 'space'} available
                    </p>
                    <div className="card-actions justify-center">

                        <label onClick={()=>setTreatment(availableOption)} htmlFor="my-modal-3" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;