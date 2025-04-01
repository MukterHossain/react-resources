import React from 'react';
import Button, { DubleButton } from '../button/Button';

const Banner = ({title, subtitle, description}) => {
    return (
        <div className='bg-gray-50/50 flex flex-col justify-center items-center '>
            <div className='max-w-2xl py-20 p-3'>
                <p className='text-xl sm:text-2xl text-pink-600 text-center font-bold py-2'>{subtitle}</p>
                <h2 className='text-3xl sm:text-5xl text-gray-800 text-center font-bold py-2'>{title}</h2>
                <p className='text-sm text-gray-500/70 text-center font-bold py-2'>{description}</p>
                <DubleButton title={'Your next plan'} title2={'Explore first'}></DubleButton>
                <div className='flex justify-end items-end'>
                    <Button  title={'Read More'}></Button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;