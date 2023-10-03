import React from 'react';
import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className='flex mb-6 bg-[#F3F3F3] px-4 py-2 rounded-lg'>
            <button className='btn btn-secondary'>Latest News</button>
            <Marquee pauseOnHover={true} className='mr-4 text-xl font-semibold'><p className='mr-4'><b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className='mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className='mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;