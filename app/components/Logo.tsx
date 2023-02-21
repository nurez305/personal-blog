import React from 'react'
import Image from 'next/image'

function Logo(props : any) {
 const {renderDefault, title} = props   
  return (
    <div>
        <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src="http://www.logodesign.net/images/abstract-logo.png"
        alt='logo' 
        />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo 