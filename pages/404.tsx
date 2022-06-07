import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import Image from 'next/image'

const Error = () => {
  return (
    <>
        <ProfileHeader />
        <Image 
            src={'https://www.getcollectr.com/public-assets/images/offer-up-not-found.png'}
            alt={'404 error'}
            height={600}
            width={600}
        />
    </>
  )
}

export default Error