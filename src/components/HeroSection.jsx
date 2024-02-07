import React from 'react';
import { homepage, overlap } from '../assets';

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen'>
      <img src={homepage} alt='' className="absolute w-full h-full object-cover" />
      <img src={overlap} alt="" className='absolute w-full h-full object-cover bg-center' />

      <div className="absolute text-white text-left w-[65%] h-[76%] flex
       flex-col gap-[20px] pt-[100px] px-[5%]">
        <h1 className="text-[70px] font-extrabold w-[500px]">Blood donation Revolutionized</h1>
        <h3 className="text-[36px] w-[58%]">Modern, efficient, tech powered blood donation system</h3>
        <h4 className="text-[24px] mt-6 w-[65%]">Blood donation is not just an act of altruism, but a journey of personal growth and community impact.</h4>
        <button className='h-[55px] w-[275px] mt-[60px] border-[2px] border-white flex justify-center items-center bg-red text-white text-[20px] rounded-[32px]'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
