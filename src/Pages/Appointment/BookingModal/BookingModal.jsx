import React from 'react';
import Appointment from '../Appointment/Appointment';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const {name,slots} = treatment 
    const handelBooking =(e)=>{
        e.preventDefault()
            const form = e.target
            const slot = form.slot.value
            const name = form.name.value
            const email = form.email.value
            const phone = form.phone.value
            const booking = {

                appointmentDate: date,
                slot,
                treatment:name,
                patient:name,
                email,
                phone,

            }
        setTreatment(null)
            console.log(booking)
              
            
        }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                  <form onSubmit={handelBooking}>
                        <input name = "date" disabled value={date} type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <select name="slot"className="select select-bordered w-full ">
                           {
                                slots.map(slot => <option>{slot}</option>)
                           }
                            
                        </select>
                        <input name = "name" type="text" placeholder="name" className="input input-bordered w-full " />
                        <input name = "email" type="text" placeholder="email" className="input input-bordered w-full " />
                        <input name = "phone" type="text" placeholder="phone" className="input input-bordered w-full " />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />

                  </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;