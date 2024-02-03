import React from 'react'
import { homepage, landing } from '../assets'


export const LandingPage = () => {
    return (
        <div className=" h-[1000px] w-full flex flex-row justify-center items-center">
            <img src={landing} alt="" />
            <img className='h-[500px] w-[500px] rounded-[50%]' src={homepage} alt="" />
        </div>
    )
}
