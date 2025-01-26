
"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import { useGetProjectsQuery } from '@/app/state/api';
import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDown, ChevronUp, Home, Layers3, LockIcon, LucideIcon, Menu, Search, Settings, ShieldAlert, User, Users, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const dispatch=useAppDispatch();
  const isSidebarCollapsed=useAppSelector((state)=>state.global.isSidebarCollapsed);
  const { data:projects }=useGetProjectsQuery();
 const sidebarClassNames = `fixed flex flex-col h-[100%] no-scrollbar justify-between shadow-xl
    transition-all duration-300 z-40 dark:bg-black overflow-y-auto bg-white
    ${isSidebarCollapsed?"w-0 hidden":"w-84"}`
  return (
    <div className={sidebarClassNames}>
        <div className='flex h-[100%] w-full flex-col justify-start no-scrollbar'>
            {/* Top logo */}
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                <div className='text-xl font-bold text-gray-800 dark:text-white animate-pulse'>
                    SPRINTBOARD
                </div>
                {/* Sidebar Collapse Button */}
               {isSidebarCollapsed ? null : (
                <button onClick={()=>dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))} className='h-8 w-8 rounded p-2 hover:bg-gray-100 dark:bg-gray-800'>
                  <X className='h-6 w-6 dark:text-white'></X>
                </button>
                )}
            </div>
           {/* Team */}
           <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 no-scrollbar px-8 py-4 dark:border-gray-700'>
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
           {/* Sidebar Links */}
           <nav className='z-10 w-full no-scrollbar'>
              <SidebarLink icon={Home} label="Home" href='/'/>
              <SidebarLink icon={Briefcase} label="Timeline" href='/timeline'/>
              <SidebarLink icon={Search} label="Search" href='/search'/>
              <SidebarLink icon={Settings} label="Settings" href='/settings'/>
              <SidebarLink icon={User} label="User" href='/users'/>
              <SidebarLink icon={Users} label="Teams" href='/teams'/>
           </nav>
           <button onClick={()=>setShowProjects((prev)=>!prev)} className='flex items-center justify-between px-8 py-4 w-full dark:border-gray-700 dark:text-gray-200'>
              <span className='font-bold'>Projects</span>
              {showProjects ? (
                <ChevronUp className='h-4 w-4 dark:text-gray-200'/>
              ):(
                <ChevronDown className='h-4 w-4 dark:text-gray-200'/>
              )}
             
           </button>
           {showProjects &&
              projects?.map((project)=>(
                <SidebarLink key={project.id} icon={Briefcase} label={project.name} href={`/projects/${project.id}`}/>
              ))}
           <button onClick={()=>setShowPriority((prev)=>!prev)} className='flex items-center justify-between px-8 py-4 w-full dark:border-gray-700 dark:text-gray-200'>
              <span className='font-bold'>Priorities</span>
              {showPriority ? (
                <ChevronUp className='h-4 w-4 dark:text-gray-200'/>
              ):(
                <ChevronDown className='h-4 w-4 dark:text-gray-200'/>
              )}
           </button>
           {showPriority && (
            <>
              <SidebarLink icon={AlertCircle} label="Urgent" href='/priority/urgent'/>
              <SidebarLink icon={ShieldAlert} label="High" href='/priority/high'/>
              <SidebarLink icon={AlertTriangle} label="Medium" href='/priority/medium'/>
              <SidebarLink icon={AlertOctagon} label="Low" href='/priority/low'/>
              <SidebarLink icon={Layers3} label="Backlog" href='/priority/backlog'/>
            </>
            )}
        </div>
    </div>
  )
}

type SidebarLinkProps={
  href:string;
  icon:LucideIcon;
  label:string;
  // isCollapsed:boolean;
}
const SidebarLink=({
  href,icon:Icon,label,
  // isCollapsed
}:SidebarLinkProps)=>{
  const pathname=usePathname();
  const isActive=pathname===href||(pathname==="/"&&href==="/dashboard");
  // const screenWidth=window.innerWidth; 
  // const dispatch=useAppDispatch();
  //    const isSidebarCollapsed=useAppSelector((state)=>state.global.isSidebarCollapsed);
  //    const isDarkMode=useAppSelector((state)=>state.global.isDarkMode); 
   return(
     <Link href={href} className='w-full'>
        <div className={`flex cursor-pointer items-center gap-5 px-8 py-4 dark:border-gray-700 dark:text-gray-200 ${isActive?'bg-gray-100 dark:bg-gray-800':''}`}>
          {isActive && (
            <div className='absolute left-0 w-1 h-full bg-blue-500'></div>
          )}
          <Icon className='h-6 w-6 text-gray-800 dark:text-gray-200'/>
          <span className={`font-medium text-gray-800 dark:text-gray-100`}>
            {label}
          </span>

        </div>
     </Link>
   )

}

export default Sidebar