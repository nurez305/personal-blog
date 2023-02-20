import React from 'react'
import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"





function StudioNavbar(props : any) {
  return (
    <div>

        <div className='flex items-center justify-between p-5'>
            <Link href="/" className='text-[#F7AB0A] flex items-center'>
                <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A] mr-2'/>
                Go to website
                </Link>
               <div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]'>
                    <h1 className='font-bold text-white'>want to check my portfolio website out ?</h1>

                    <Link href="https://saliunurudeen.netlify.app/" className='ml-2 font-bold text-[#F7AB0A]'>
                        saliunurudeen.netlify.app
                    </Link>
                </div> 
        </div>
        <>
        {props.renderDefault(props)}
        </>
        
        </div>
  )
}

export default StudioNavbar