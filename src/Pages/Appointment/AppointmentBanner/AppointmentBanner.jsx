import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {

    const date = format(selectedDate,'PP')

    return (
        <div>
            <div className="hero mt-16 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="h-[355px] rounded-lg shadow-2xl w-[594px] lg:ml-[121px]" />
                    <div>
                        <DayPicker
                            mode="single"
                           
                            onSelect={setSelectedDate}
                            footer= {date}
                            
                        />
                      
                    </div>
                </div>
            </div>-
            
        </div>
    );
};

export default AppointmentBanner;