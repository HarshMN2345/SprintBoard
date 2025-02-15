import React from 'react'

type Props = {
    name:string;
    buttonComponent?:React.ReactNode;
    isSmallText?:boolean;
}

const Header = ({
    name,
    buttonComponent,
    isSmallText=false
}:Props) => {
  return (
    <div className='mb-5 flex w-full items-center justify-between'>
        <h1 className={`${isSmallText?"tet-lg":"text-2xl"} font-bold dark:text-white`}>
            {name}
        </h1>
        <span>{buttonComponent}</span>
    </div>
  )
}

export default Header