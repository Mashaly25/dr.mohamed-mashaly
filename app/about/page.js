import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto font-sans text-xl md:text-lg ">
        <Header></Header>
        <About className='mt-10 mb-10'></About>
        <Footer></Footer>
    </div>
  )
}
