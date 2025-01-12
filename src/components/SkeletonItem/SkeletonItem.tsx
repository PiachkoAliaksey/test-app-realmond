import React from 'react'
import { Skeleton } from '@mui/material'

const SkeletonItem = () => {
    return (
        <div className="p-2 min-h-[180px] flex flex-col gap-2 items-center bg-red-100 backdrop-blur-md rounded-lg shadow-sm hover:shadow-md transition">
            <div className="w-full h-full flex flex-col lg:flex-row gap-3 items-center">
                <div className="w-auto">
                    <Skeleton variant='rectangular' width={'100px'} height={'100px'} className='rounded-lg' />
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-3/4">
                    <div className="flex flex-col" >
                        <Skeleton variant='text' className="font-bold text-lg" />
                        <Skeleton variant='text' className="text-sm" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full" >
                <Skeleton variant='text' className="font-bold" />
                <Skeleton variant='text' className=" text-[10px]" />
            </div>
        </div>
    )
}

export default SkeletonItem