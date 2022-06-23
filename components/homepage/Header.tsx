import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const openDropdown = () => {
    if (menuOpen === false) {
      const open: any = document.getElementById('hamburger-menu')
      setMenuOpen(true)
      open.className = 'dropdown-links'
    } else {
      const close: any = document.getElementById('hamburger-menu')
      close.className = 'display-none'
      setMenuOpen(false)
    }
  }

  return (
    <>
        <div className='home-header'>
            <div className="header-content">
              <div className="home-logo">
                  <Link href={'https://showcase.getcollectr.com/'}>
                    <Image
                        src={'https://www.getcollectr.com/marketing-website/images/collectr_logo-removebg---copy-p-500.png'}
                        width={235}
                        height={40}
                        alt={'collectr-icon'}
                        objectFit='contain'
                    />
                  </Link>
              </div>
              <div className='nav-links'>
                <Link href="https://www.getcollectr.com/#Features">Features</Link>
                <Link href="https://www.getcollectr.com/#Ambassadors">Ambassadors</Link>
                <Link href="https://showcase.getcollectr.com/">Showcase</Link>
                <Link href="https://getcollectr.com/shop#!/">Store</Link>
              </div>
              
              
                <div className='download-link'>
                  <Link href={'https://linktr.ee/collectr'}>
                    <div className='next-link'>
                      <div>Download Now</div>
                      <div className='arrow-link'>
                        <Image
                          src={'https://www.getcollectr.com/marketing-website/images/Arrow-Icon_1Arrow%20Icon.png'}
                          alt={'download arrow'}
                          height={12}
                          width={12}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className='hamburger-link' onClick={openDropdown}>
                    <div className='hamburger-container'>
                      <div className='hamburger'></div>
                      <div className='hamburger'></div>
                      <div className='hamburger'></div>
                    </div>
                  </div>
                </div>
             
            </div>
        </div>
        <div className='display-none' id='hamburger-menu'>
          <Link href="https://www.getcollectr.com/#Features">Features</Link><br/>
          <Link href="https://www.getcollectr.com/#Ambassadors">Ambassadors</Link><br/>
          <Link href="https://showcase.getcollectr.com/">Showcase</Link><br/>
          <Link href="https://getcollectr.com/shop#!/">Store</Link>
        </div>
    </>
  )
}


export default Header