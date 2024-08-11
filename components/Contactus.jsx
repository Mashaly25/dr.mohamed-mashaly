import React from 'react'

export default function Contactus() {
  return (
    <div className=" bg-gray-100 p-10 mt-10 mb-10 rounded-2xl">
    <h2 className="text-4xl font-bold text-center mb-8">تواصل معنا</h2>
    <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">مواقع التواصل الاجتماعي</h3>
            <div className="flex space-x-4">
                <a href="https://wa.me/message/KPAJU4M2BKSMD1" target="_blank" className="text-3xl hover:text-sky-500 ease-out duration-300"><i className="ri-whatsapp-line"></i></a>
                <a href="https://www.facebook.com/p/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%B4%D8%A7%D9%84%D9%8A-%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%B0%D9%83%D9%88%D8%B1%D8%A9-%D9%88%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%82%D9%85-Dr-Mohamed-mashaly-100091000506740" target="_blank" className="text-3xl hover:text-sky-500 ease-out duration-300"><i className="ri-facebook-circle-fill"></i></a>
                <a href="https://www.instagram.com/dr.mohamedmashaly/" target="_blank" className="text-3xl hover:text-sky-500 ease-out duration-300"><i className="ri-instagram-line"></i></a>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">البريد الإلكتروني</h3>
            <a href="mailto:drmhm2025@gmail.com" className="text-xl hover:text-sky-500 ease-out duration-300">drmhm2025@gmail.com</a>
        </div>
        <div className="flex flex-col items-center mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold mb-4">رقم الهاتف</h3>
            <a href="tel:+201022643370" className="text-xl hover:text-sky-500 ease-out duration-300">+20 102 264 3370</a>
        </div>
    </div>
</div>
  )
}

