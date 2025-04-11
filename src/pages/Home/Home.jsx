import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuItem from '../../sheard/MenuItem';
const Home = () => {

    const [menu] = useMenu('popular');

    console.log(menu)
    // const popularItems = menu?.filter(item => item.category === 'popular')

    return (
        <div>
            <SectionTitle subTitle="From 11:00am to 10:00pm" mainTitle="ORDER ONLINE"></SectionTitle>
            <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-2 lg:px-28">
                {
                    menu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center py-6">
            {/* <Button buttonText='View Full Menu'></Button> */}
            </div>
        </div>
    );
};

export default Home;