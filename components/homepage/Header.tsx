import React, { FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <>
        <div className='home-header'>
            <div className="home-logo">
                <Image
                    src={'https://www.getcollectr.com/marketing-website/images/collectr_logo-removebg---copy-p-500.png'}
                    width={150}
                    height={30}
                    alt={'collectr-icon'}
                />
            </div>
        </div>
    </>
  )
}


export default Header