import Header from '@/components/Header/page';
import { Clock, Filter, Grid3x3, List, Share2, Table2 } from 'lucide-react';
import React,{useState} from 'react'

type Props = {
    activeTab: string;
    setActiveTab: (tabName: string) => void;
    } 
const ProjectHeader = ({activeTab,setActiveTab}:Props) => {
    const [isModelNewProjectOpen,setIsModelNewProjectOpen]=useState(false);
  return (
    <div className='px-4 xl:px-6 '>
        <div className='pb-6 pt-6 lg:pb-4 lg:pt-8'>
            {/* Header componet */}
            <Header name='Design and Development of Products'/>
        </div>
        <div className='flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-gray-700'>
            <div className='flex flex-1 items-center gap-2 md:gap-4'>
                <TabButton name='Board' icon={<Grid3x3/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabButton name='List' icon={<List/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabButton name='Timeline' icon={<Clock/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabButton name='Table' icon={<Table2/>} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>
            <div className='flex items-center gap-2'>
                <button className='text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300'>
                    <Filter className='h-5 w-5'/>
                </button>
                <button className='text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300'>
                    <Share2 className='h-5 w-5'/>
                </button>
                <div className='relative'>
                    <input type='text' placeholder='Search Task' className='w-48 h-8 px-2 rounded-lg dark:bg-dark-secondary dark:text-white focus:outline-none'/>
                   <Grid3x3 className='absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-200'/>
                </div>
            </div>
        </div>
    </div>
  )
}

type TabButtonProps={
    name:string;
    icon:React.ReactNode;
    activeTab:string;
    setActiveTab:(tabName:string)=>void;
}
const TabButton=({name,icon,activeTab,setActiveTab}:TabButtonProps)=>{
    const isActive=activeTab===name;
    return(
        <button onClick={()=>setActiveTab(name)} className={`flex items-center gap-2 py-2 px-4 rounded-lg ${isActive?'bg-blue-500 text-white':'text-gray-500 dark:text-gray-200'}`}>
            {icon}
            <span>{name}</span>
        </button>
    )

}

export default ProjectHeader
