import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div>
        <Image src="/logo.png" width={100} height={1}></Image>
    </div>
  )
}
