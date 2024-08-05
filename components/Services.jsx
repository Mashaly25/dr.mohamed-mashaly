import React from 'react';
import Servicescard from './Servicescard';
import { servicesData } from './data/Servicescarddata';

export default function Services() {
  return (
    <div className='flex flex-col items-center justify-center p-10 text-right'>
      <h1 className='font-bold text-4xl mt-10 text-right'>
        الخدمات الطبية
      </h1>
      <div className='grid gap-10 mt-10 md:grid-cols-2 '>
        {servicesData.map((service, index) => (
          <Servicescard
            key={index}
            image={service.image}
            services={service.services}
            servicesdetails={service.servicesdetails}
            serviceslink={service.serviceslink}
          />
        ))}
      </div>
    </div>
  );
}
