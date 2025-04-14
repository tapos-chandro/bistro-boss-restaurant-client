import React from 'react';

const Banner = ({heading, paragraph, backgroundImg}) => {
    return (
        <div className='bg-fixed bg-no-repeat flex items-center bg-cover bg-right h-[550px] lg:h-[700px] ' style={{backgroundImage: `url(${backgroundImg})`}}>
        <div className='w-full h-full flex items-center'>
          <div className='flex items-center justify-center text-center mx-auto mt-28 py-7 lg:py-0 lg:h-60 w-10/12 bg-[#15151599]'>
            <div className='text-primary-text'>
              <h1 className='text-5xl lg:text-7xl my-3 uppercase text-light'>{heading}</h1>
              <p className='uppercase lg:text-2xl py-4 lg:py-0 text-light'>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;