
"use client";
import { LockIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
 const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`
  return (
    <div className={sidebarClassNames}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            {/* Top logo */}
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                <div className='text-xl font-bold text-gray-800 dark:text-white'>
                    SPRINTBOARD
                </div>
            </div>
           {/* Team */}
           <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700'>
              <Image src='/logo.png' alt='logo' width={60} height={60} />
              <div>
                <h3 className='text-md font-bold tracking-wide dark:text-gray-200'>
                  HARSH TEAM
                </h3>
                <div className='mt-1 flex items-start gap-2'>
                   <LockIcon className='dark:text-gray-100' size={16} />
                   <p className='text-xs dark:text-gray-100 text-gray-700'>Private</p>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Sidebar