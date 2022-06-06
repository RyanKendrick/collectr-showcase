import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Header from '../components/homepage/Header'
import Footer from '../components/homepage/Footer'
import axios from 'axios'

const Home: NextPage = () => {

  const [bannerImages, setBannerImages] = useState()

  useEffect(() => {
    axios.get('https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/hero-banner')
      .then((response) => {
        console.log('response', response.data)
        setBannerImages(response.data)
      })
  }, [])

  return (
    <>
        <Header />

        <Footer />
    </>
  )
}

export default Home
