import Contactus from '@/components/Contactus'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto font-sans text-xl md:text-lg ">
        <Header></Header>
        <Contactus className='mt-10 mb-10'></Contactus>
        <Footer></Footer>
    </div>
  )
}
