import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from '../AppointmentBanner/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointment = ({selectedDate}) => {
    const date = format(selectedDate, 'PP')
    const [treatment,setTreatment] = useState(null)
    const [availableOptions,setAvailableOptions] = useState([])

    useEffect(()=>{
        fetch('appointmentOption.json')
        .then(res=>res.json())
        .then(data=>setAvailableOptions(data))
    },[])
  
    return (
        <div>
            <p className='text-center text-3xl text-secondary'>Available Appointments on {date} </p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    availableOptions.map(availableOption => <AppointmentOption availableOption={availableOption} setTreatment={setTreatment} date={date}></AppointmentOption>)
                }
           </div>
          {
            treatment &&
                <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
          }

        </div>
    );
};

export default AvailableAppointment;