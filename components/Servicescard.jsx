import React from 'react'

export default function Servicescard(props) {
    const image = props.image
    const services= props.services
    const servicesdetails= props.servicesdetails
    const serviceslink = props.serviceslink
  return (
    <div className='flex flex-col  bg-slate-100 text-right rounded-2xl drop-shadow-xl hover:drop-shadow-2xl ease-out duration-300' dir='rtl'>
        <img className=' rounded-t-2xl max-h-96  object-cover' src={image}></img>
        <h1 className='p-3 font-bold text-2xl'>{services}</h1>
        <p className='p-3'>{servicesdetails}</p>
        <a href={serviceslink} target='_blank' className='px-5 py-2 m-5 w-20 rounded-2xl bg-sky-500 hover:bg-sky-800 hover:text-white drop-shadow-2xl  ease-out duration-300 '>المزيد</a>
    </div>
  )
}
