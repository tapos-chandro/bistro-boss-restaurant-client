import React from 'react';

const Cover = ({ heading, paragraph, uppercase, backgroundImg}) => {
    return (
        <div className='bg-bistro-banner bg-fixed bg-no-repeat flex items-center  bg-cover bg-right h-[500px] ' style={{backgroundImage: `url(${backgroundImg})`}}>
        <div className='w-full h-full flex items-center' >
          <div className='flex items-center justify-center text-center mx-auto h-60 w-10/12 px-8 lg:px-20 bg-primary-text bg-[#0000006d] text-light'>
            <div className=''>
              <h1 className='text-5xl my-3'>{heading}</h1>
              <p className={uppercase }>
                  {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cover;