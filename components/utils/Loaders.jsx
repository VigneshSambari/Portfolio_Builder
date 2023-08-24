"use client"

import  Lottie  from 'lottie-react';

import { Loading1 } from '@assets';

export const FullLoader = () => {
    return (
        <div className="fixed flex w-full h-full bg-white justify-items-center z-50">
                <Lottie animationData={Loading1} className="w-[100px] h-[100px] object-contain"/>
        </div>
    );
}

