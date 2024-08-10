import React from 'react'

export default function Customerreviews() {
  return (
    <div className=' flex flex-col items-center justify-center p-10 text-right bg-gray-100 rounded-2xl'>
        <h1 className='font-bold text-4xl mt-10 text-right mb-10 '>أراء العملاء</h1>
        <div className=' flex flex-col space-y-5 md:grid md:grid-cols-3 gap-5 items-center justify-center  '>
            <img className=' rounded-xl  hover:drop-shadow-2xl ease-out duration-300' src='https://firebasestorage.googleapis.com/v0/b/dr-mohamed-mashaly.appspot.com/o/449821596_421347430908604_800136434732352052_n.jpg?alt=media&token=69c196c2-7953-4ce7-bdd8-4cfa1c9fa5bf' alt='Customer reviews'></img>
            <img className=' rounded-xl  hover:drop-shadow-2xl ease-out duration-300' src='https://firebasestorage.googleapis.com/v0/b/dr-mohamed-mashaly.appspot.com/o/450192831_421347197575294_2331806284510395528_n.jpg?alt=media&token=b94c1ef5-20c6-4308-9c05-80692bfa6e57' alt='Customer reviews'></img>
            <img className=' rounded-xl  hover:drop-shadow-2xl ease-out duration-300' src='https://firebasestorage.googleapis.com/v0/b/dr-mohamed-mashaly.appspot.com/o/449832961_421347677575246_3891539900447500953_n.jpg?alt=media&token=810e58ba-c871-4149-8195-9d7a3f8df2cd' alt='Customer reviews'></img>
        </div>
    </div>
  )
}
