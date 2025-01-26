import React from 'react'
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/app/state';


const Navbar = () => {
   const dispatch=useAppDispatch();
   const isSidebarCollapsed=useAppSelector((state)=>state.global.isSidebarCollapsed);
   const isDarkMode=useAppSelector((state)=>state.global.isDarkMode);
  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black dark:px-4 dark:py-3'>
         {/* Search Bar */}
         <div className='flex items-center gap-8'>
            {!isSidebarCollapsed ? null:(<button onClick={()=>dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))} className='h-min w-min rounded p-2 hover:bg-gray-100'>
                  <Menu className='h-6 w-6 dark:text-white'></Menu>
            </button>)}
            <div className='relative flex h-min w-[200px]'>
                <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'>
                </Search>
                <input type='search' placeholder='Search' className='w-full h-full px-8 py-2 bg-gray-100 dark:bg-dark-secondary dark:text-white rounded-lg focus:outline-none'></input>
            </div>
         </div>
         {/* Icons */}
            <div className='flex items-center'>
               <button onClick={()=>dispatch(setIsDarkMode(!isDarkMode))} className={isDarkMode?'h-min w-min rounded p-2 hover:dark:bg-gray-700':'h-min w-min rounded p-2 hover:bg-gray-100'}>
                  {isDarkMode?(
                     <Sun className='h-6 w-6 dark:text-white'></Sun>
                  ):(
                     <Moon className='h-6 w-6 dark:text-white'></Moon>
                  )}

                  </button>
               <Link href="/settings" className='h-min w-min rounded p-2 hover:bg-gray-100'>
                   <Settings className='h-6 w-6 dark:text-white'></Settings>
               </Link>
               <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'>

               </div>
            </div>
    </div>
  )
}

export default Navbar