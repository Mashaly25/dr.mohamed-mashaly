import React from 'react';
import { InstagramReelsPageData } from './data/InstagramReelsData'

const InstagramReelsPage = () => {
  return (
    <section className=" py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">فيديوهات</h2>
        <div className='flex flex-col space-y-5 md:grid md:grid-cols-3 gap-5 items-center justify-center md:ml-16'>
          {InstagramReelsPageData.map((video, index) => (
            <div key={index} className='w-80 ' >
              <video className="rounded-2xl" width="1078" height="1920" controls >
                <source src={video.url} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramReelsPage;
