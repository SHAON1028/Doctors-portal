import React from 'react';
import appointment from "../../../assets/images/appointment.png"

const Contactus = () => {
    return (
       <section className='w-full' style={{backgroundImage:`url(${appointment})`}}> 
         <div className='text-center  '> 
            <div>
                <h2 className='text-lg text-primary font-bold mt-36 pt-[65px]'>Contact Us</h2>
                <p className='text-4xl text-white mb-[41px]'>Stay connected with us</p>
            </div>
            <div>
            <input type="text" placeholder="Email Address" className="input input-bordered w-[450px] mb-[19px]" /><br></br>
            <input type="text" placeholder="Subject" className="input input-bordered w-[450px]  mb-[19px]" /><br></br>
            <textarea className="textarea textarea-bordered w-[450px]  mb-[19px]" placeholder="Bio"></textarea><br></br>
            <button className="w-[120px] btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mb-[71px] ">Submit</button>
            
            </div>
        </div>
       </section>
    );
};

export default Contactus;