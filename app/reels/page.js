import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InstagramReelsPage from '@/components/InstagramReelsPage'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto font-sans text-xl md:text-lg ">
        <Header></Header>
        <InstagramReelsPage className='mt-10 mb-10'></InstagramReelsPage>
        <Footer></Footer>
    </div>
  )
}
