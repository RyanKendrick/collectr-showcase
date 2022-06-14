import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header: FunctionComponent = () => {
  return (
    <>
        <div className='home-header'>
            <div className="home-logo">
                <Link href={'https://showcase.getcollectr.com/'}>
                  <Image
                      src={'https://www.getcollectr.com/marketing-website/images/collectr_logo-removebg---copy-p-500.png'}
                      width={150}
                      height={30}
                      alt={'collectr-icon'}
                  />
                </Link>
            </div>
        </div>
    </>
  )
}


export default Header