import React from 'react'
import Appointmentcard from './Appointmentcard'

export default function Appointments() {
  return (
    <div className='  bg-gray-100 flex flex-col items-center justify-center p-10  rounded-2xl'>
        <h1 className='font-bold text-4xl mt-10'>
            مواعيد العمل
        </h1>
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-10 items-center justify-center'>
            <Appointmentcard locationwork="القاهرة" locationdetails='52 ش جامعة الدول العربية ميدان مصطفى محمود المهندسين برج العجيل' day='الاربعاء' clock='11:00ص الى 06:00م' map='https://maps.app.goo.gl/qvAAFAR91gXeiF4g9'></Appointmentcard>
            <Appointmentcard locationwork="التجمع الخامس" locationdetails='مول ميديكال بارك خلف المستشفى الجوي الدور  الدور الرابع عيادة 415' day='الاربعاء' clock='07:00م الى 09:00م' map='https://maps.app.goo.gl/C7FstdieUPVPp3dB6'></Appointmentcard>
            <Appointmentcard locationwork="الإسكندرية" locationdetails='شارع عبد الحميد العبادي متفرع من ش سوريا منطقة رشدي خلف مستشفى اليكس سيدني بجوار ماركت الفلاح' day='الأحد والثلاثاء' clock='04:00م الى 08:00م' map='https://maps.app.goo.gl/oKnuUGRAGzJ2P4FA8'></Appointmentcard>
            <Appointmentcard locationwork="طنطا" locationdetails='شارع المدارس تقاطع شارع طه الحكيم أمام مستشفى الحميات' day='السبت والاثنين' clock='01:00ص الى 04:00م' day2='الخميس' clock2='01:00ص الى 05:00م' map='https://maps.app.goo.gl/CqN1JVwkhqNHHwwA8'></Appointmentcard>
        </div>
        
    </div>
  )
}
