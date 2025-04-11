import React from 'react';

const SectionTitle = ({subTitle, mainTitle}) => {
    return (
        <div className="text-center">
        <p className="text-[#D99904] text-xl italic">---{subTitle}---</p>
        <div className="flex justify-center my-5">
        <h1 className="text-[#151515] text-[40px] border-y-4 border-[#E8E8E8] w-96 py-4">{mainTitle}</h1>
        </div>
    </div>
    );
};

export default SectionTitle;