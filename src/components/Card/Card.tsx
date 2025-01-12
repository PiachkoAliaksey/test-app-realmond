import React from 'react';
import Image from 'next/image';
import { TCardFormat } from '@/lib/types';


const Card = ({ artworkUrl60, artistName, collectionName, primaryGenreName, country }: TCardFormat) => {
    return (
        <div className="p-2 min-h-[180px] flex flex-col gap-2 items-center bg-red-100 backdrop-blur-md rounded-lg shadow-sm hover:shadow-md transition">
            <div className="w-full h-full flex flex-col lg:flex-row gap-3 items-center">
                <div className="w-auto">
                    {artworkUrl60 && (
                        <Image
                            src={artworkUrl60}
                            alt={artistName}
                            className="rounded-md"
                            width={100}
                            height={100}
                        />)}
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-3/4">
                    <div className="flex flex-col" >
                        <h2 className="font-bold text-lg md:line-clamp-3">{collectionName}</h2>
                        <span className="text-sm text-gray-800" >{primaryGenreName}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full" >
                <p className="text-gray-600 font-bold">{artistName}</p>
                <p className="text-gray-600 text-[10px]">Country: {country}</p>
            </div>
        </div>
    )
}

export default Card;
