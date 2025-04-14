import React from 'react';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../../sheard/MenuItem';
import Button from '../../components/Button';
import { RotatingLines } from 'react-loader-spinner';
import Loading from '../../components/Loading';

const OurMenu = () => {
    const [menu] = useMenu('popular');


    if (!menu) { 
       return <Loading/>
    }

    return (
        <div>
        <SectionTitle subTitle="Check it out" mainTitle="FROM OUR MENU"></SectionTitle>
        <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-2 lg:px-28">
            {
                menu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className="flex justify-center py-6">
        <Button buttonText='View Full Menu'></Button>
        </div>
    </div>
    );
};

export default OurMenu;