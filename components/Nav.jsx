"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';

export default function Nav() {
  const [menu, setMenu] = useState("hidden");

  const toggleMenu = () => {
    setMenu(menu === "hidden" ? "block" : "hidden");
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.menu-container') === null) {
      setMenu("hidden");
    }
  };

  useEffect(() => {
    if (menu === "block") {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menu]);

  return (
    <div className="menu-container">
      <div className='hidden md:flex flex-row-reverse space-x-5 mr-3 font-bold items-center justify-center text-center'>
        <Link target="_blank" href={"https://wa.me/message/KPAJU4M2BKSMD1"} className='px-5 py-2 ml-5 rounded-2xl bg-sky-500 hover:bg-sky-800 hover:text-white hover:px-6 hover:py-3 ease-out duration-300'>احجز ميعادك</Link>
        <Link href={"/"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>الرئيسية</Link>
        <Link href={"/about"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>عن د/محمد مشالى</Link>
        <Link href={"/reels"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>فيديوهات</Link>
        <Link href={"/contact-us"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>تواصل معنا</Link>
      </div>
      <button onClick={toggleMenu} className='md:hidden'><i className="ri-menu-line text-sky-950 mr-5"></i></button>
      <div className={`md:hidden ${menu}`}>
        <div className='absolute flex flex-col items-center space-y-4 font-bold bg-gray-50 py-8 left-6 right-6 rounded-xl drop-shadow-lg'>
          <Link href={"/"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>الرئيسية</Link>
          <Link href={"/about"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>عن د/محمد مشالى</Link>
          <Link href={"/reels"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>فيديوهات</Link>
          <Link href={"/contact-us"} className='text-sky-950 text-lg hover:text-xl hover:text-sky-600 ease-out duration-300'>تواصل معنا</Link>
          <Link target="_blank" href={"https://wa.me/message/KPAJU4M2BKSMD1"} className='px-5 py-2 ml-5 rounded-2xl bg-sky-500 hover:bg-sky-800 hover:text-white hover:px-6 hover:py-3 ease-out duration-300'>احجز ميعادك</Link>
        </div>
      </div>
    </div>
  );
}
