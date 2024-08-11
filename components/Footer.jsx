import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-sky-950 rounded-t-xl text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img
            className="h-16"
            src="https://firebasestorage.googleapis.com/v0/b/dr-mohamed-mashaly.appspot.com/o/logo-website-3ai.png?alt=media&token=b3cb59fa-0b57-4b4b-ad73-526507e345f8"
            alt="logo"
          />
        </div>
        <div className="flex flex-col md:flex-row-reverse space-y-4 md:space-y-0 md:space-x-6 text-right">
          <a
            href="https://wa.me/message/ZWN45EC2PODYG1"
            className="px-4 py-2 ml-4 rounded bg-sky-500 hover:bg-sky-800"
          >
            احجز ميعادك
          </a>
          <Link href="/" className="hover:text-sky-500">الرئيسية</Link>
          <Link href="/about" className="hover:text-sky-500">عن د/محمد مشالى</Link>
          <Link href="/reels" className="hover:text-sky-500">فيديوهات</Link>
          <Link href="/contact-us" className="hover:text-sky-500">تواصل معنا</Link>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://wa.me/message/KPAJU4M2BKSMD1"
            className="text-2xl hover:text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
          <a
            href="https://www.facebook.com/p/%D8%AF-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%B4%D8%A7%D9%84%D9%8A-%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%85%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D8%B0%D9%83%D9%88%D8%B1%D8%A9-%D9%88%D8%B9%D9%84%D8%A7%D8%AC-%D8%A7%D9%84%D8%B9%D9%82%D9%85-Dr-Mohamed-mashaly-100091000506740"
            className="text-2xl hover:text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/dr.mohamedmashaly/"
            className="text-2xl hover:text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line"></i>
          </a>
        </div>
        <p className="mt-4">&copy; 2024 دكتور محمد مشالى. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
