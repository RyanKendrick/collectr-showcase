import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <>
    <div className='header-container'>
        <div className='subheader-container'>
            <a href="#" >
                Want to start tracking your collection?
                Download &quot;Collectr&quot; TODAY.
                Available on IOS and Android.
            </a>
        </div>
        <div className='title-container'>
            <Image
                src={'https://www.getcollectr.com/marketing-website/images/collectr_logo-removebg---copy-p-500.png'}
                height={103}
                width={500}
                alt={'COLLECTR'}
            />
        </div>
    </div>
    </>
  )
}

export default Header
