import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center p-10 text-right'>
        <h1 className='font-bold text-4xl mt-10'>عن الدكتور</h1>
        <h1 className='font-bold text-4xl mt-10 text-sky-950 '>محمد حمدى مشالي</h1>

        <div className=' flex flex-col md:flex-row space-x-5 space-y-5 items-center justify-center'>
            <div className='w-full md:w-1/2'>
                <img className='mt-10  max-h-[1100px] drop-shadow-xl hover:drop-shadow-2xl ease-out duration-300' alt='about dr.mohamed' src='https://firebasestorage.googleapis.com/v0/b/dr-mohamed-mashaly.appspot.com/o/about-website2.png?alt=media&token=472227d0-606f-4dec-b0d7-8a7586995d46'></img>
            </div>
            <div className='w-full md:w-1/2'>
            <p className=' bg-sky-300 rounded-2xl drop-shadow-xl hover:drop-shadow-2xl ease-out duration-300 p-7'>
            أخصائي جراحات أمراض الذكورة وعلاج العقم وتأخر الإنجاب والضعف الجنسي. بخبرة تمتد لعدة سنوات في هذا المجال، أقدم رعاية طبية متكاملة للرجال الذين يعانون من مشكلات صحية تتعلق بالخصوبة والصحة الجنسية.
            </p>
            
            </div>
        </div>

    </div>
  )
}
