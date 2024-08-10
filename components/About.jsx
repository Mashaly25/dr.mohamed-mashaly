import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center p-10 text-right'>
        <h1 className='font-bold text-4xl mt-10'>عن الدكتور</h1>
        <h1 className='font-bold text-4xl mt-10 text-sky-950 '>محمد حمدى مشالي</h1>

        <div className=' flex flex-col md:flex-row space-x-5 space-y-5 items-center justify-center'>
            <div className='w-full md:w-1/3'>
                <img className='mt-10  max-h-[1100px] drop-shadow-xl hover:drop-shadow-2xl ease-out duration-300' alt='about dr.mohamed' src='https://firebasestorage.googleapis.com/v0/b/dr-mohamed-mashaly.appspot.com/o/about-website2.png?alt=media&token=472227d0-606f-4dec-b0d7-8a7586995d46'></img>
            </div>
            <div className='w-full md:w-2/3'>
            <p className='indent-8 text-2xl p-7 text-right'>
            <spam className='text-sky-950 font-bold'>الدكتور محمد حمدي مشالي</spam> هو أحد أفضل أطباء الذكورة وصحة الرجال في مصر والوطن العربي. يتمتع بخبرة تمتد لسنوات عديدة في علاج أمراض الذكورة وتأخر الإنجاب عند الرجال. يشتهر الدكتور مشالي بتقديم رعاية طبية شاملة، تجمع بين المعرفة العلمية العميقة والاهتمام الشخصي بكل مريض. يسعى دائمًا إلى تحقيق أفضل النتائج من خلال اتباع أحدث البروتوكولات العلاجية العالمية.
            </p>
            <p className='indent-8 text-2xl p-7 text-right'>
            بالإضافة إلى ذلك، تتميز عيادات الدكتور محمد حمدي مشالي بتوفير أحدث وأفضل الأجهزة الطبية، مما يضمن تحقيق أعلى معدلات النجاح والأمان. تحرص العيادات على تقديم بيئة مريحة وآمنة للمرضى، حيث يتلقى كل مريض رعاية متخصصة تلبي احتياجاته الفردية.
            </p>
            
            </div>
        </div>

    </div>
  )
}
