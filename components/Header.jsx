import Logo from '@/public/Logo'
import React from 'react'
import Nav from './Nav'


export default function Header() {
  return (
    <div className=' flex flex-row items-center justify-between bg-sky-100 h-20'>
        
        <div className=' ml-2 flex flex-row items-center space-x-2 '>
            <img className='h-16' src='https://firebasestorage.googleapis.com/v0/b/dr-mohamed-mashaly.appspot.com/o/logo-website-2.png?alt=media&token=c2bc1eeb-1180-4c26-b631-0de4b6b61bb9' alt='logo'></img>
        </div>
        <div>
          <Nav></Nav>
        </div>

    </div>
  )
}
