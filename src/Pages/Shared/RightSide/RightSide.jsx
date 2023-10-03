import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import  Qzon1  from "../../../assets/qZone1.png";
import  Qzon2  from "../../../assets/qZone2.png";
import  Qzon3  from "../../../assets/qZone3.png";
const RightSide = () => {
    return (
        <div>
            <div className='p-4 space-y-3'>
                <h2 className="text-4xl">Login With</h2>
                <button className="btn btn-outline outline-info w-full text-info">
                    <FaGoogle></FaGoogle>
                    Button
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Button
                </button>
            </div>
            <div className='p-4'>
                <h2 className="text-4xl mb-4">Find Us On</h2>
                <Link className='flex gap-2 text-xl border border-gray-500 p-4 rounded-t-lg'>
                    <FaFacebookF className="text-[#4267B2]"></FaFacebookF>
                    <span>FaceBook</span>
                </Link>
                <Link className='flex gap-2 text-xl border-x border-gray-500 p-4'>
                    <FaInstagram className="text-[#00acee]"></FaInstagram>
                    <span>FaceBook</span>
                </Link>
                <Link className='flex gap-2 text-xl border border-gray-500 p-4 rounded-b-lg'>
                    <FaTwitter className="text-red-400"></FaTwitter>
                    <span>FaceBook</span>
                </Link>
            </div>

            <div className='p-4 bg-[#F3F3F3]'>
                <h2 className="text-4xl mb-4">Q-Zone</h2>
                <div>
                    <img src={Qzon1} alt="" />
                </div>
                <div>
                    <img src={Qzon2} alt="" />
                </div>
                <div>
                    <img src={Qzon3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSide;