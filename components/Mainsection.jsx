import Mainimg from '@/public/Mainimg'
import Image from 'next/image'
import React from 'react'

export default function Mainsection() {
  return (
    <div className='flex flex-col-reverse  md:flex-row-reverse items-center justify-between '>
        <div className='w-full p-6 md:w-1/2 text-right flex flex-col space-y-6 pb-10'>
          <h1 className='font-bold text-4xl'>دكتور محمد مشالى</h1>
          <p>
          جراحات امراض الذكورة وعلاج العقم و تأخر الإنجاب والضعف الجنسي
          </p>
          <div className='flex flex-row-reverse'>
             <a target='_blank' href='https://wa.me/message/ZWN45EC2PODYG1' className=' text-sky-950 hover:text-sky-500 text-3xl ease-out duration-300 pl-4'><i className="ri-whatsapp-line"></i></a>
             <a target='_blank' href='https://www.facebook.com/p/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%B4%D8%A7%D9%84%D9%8A-%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%B0%D9%83%D9%88%D8%B1%D8%A9-%D9%88%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%82%D9%85-Dr-Mohamed-mashaly-100091000506740' className=' text-sky-950 hover:text-sky-500 text-3xl ease-out duration-300 pl-4'><i className="ri-facebook-circle-fill"></i></a>
             <a target='_blank' href='https://www.instagram.com/dr.mohamedmashaly/' className=' text-sky-950 hover:text-sky-500 text-3xl ease-out duration-300 pl-4'><i className="ri-instagram-line"></i></a>
          </div>
        </div>
        <div className='w-full md:w-1/2' >
          <img src='/undraw_fatherhood_7i19.png' ></img>
        </div>
    </div>
  )
}
