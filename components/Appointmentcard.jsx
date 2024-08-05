import React from 'react'

export default function Appointmentcard(props) {
    const locationwork = props.locationwork
    const locationdetails = props.locationdetails
    const day= props.day
    const clock = props.clock
    const day2= props.day2
    const clock2 = props.clock2
    const map = props.map
  return (
    <div>
            <div className=' flex flex-col md:flex-row text-center md:text-right bg-white drop-shadow-xl hover:drop-shadow-2xl rounded-2xl mt-8 p-4 items-center max-w-80 md:max-w-full ease-out duration-300 ' dir="rtl" >
                <h1 className=' text-2xl px-5 py-5 m-3 bg-sky-900 drop-shadow-lg rounded-xl text-white text-center  '>
                <i className="ri-map-pin-fill ml-2"></i>
                   {locationwork}
                </h1>
                <div className='flex flex-col space-y-3 '>
                    <div className=' text-right border-b-2 border-slate-100'>
                       {locationdetails}
                    </div>
                    <div className='border-b-2 border-slate-100'>
                    <i className="ri-time-line"></i>
                         {day}   
                    </div>
                    <div className='border-b-2 border-slate-100'>{clock}</div>
                    <div>
                         {day2}   
                    </div>
                    <div>{clock2}</div>
                    <a href={map} target='_blank' className='text-blue-500 hover:underline hover:text-blue-600 mt-auto ease-out duration-300'>فتح على الخريطة</a>
                </div>
            </div>
    </div>
  )
}
