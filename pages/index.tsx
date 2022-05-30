import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import Collection from '../components/Collection'
import Modal from '../components/Modal'
// import CircularProgress from '@mui/material/CircularProgress'


const Home: NextPage = () => {

  const [userAvatar, setUserAvatar] = useState('')
  const [userName, setUserName] = useState('')
  const [portfolioValue, setPortfolioValue] = useState(0)
  const [totalCards, setTotalCards] = useState('') 
  const [totalSealed, setTotalSealed] = useState('')
  const [totalGraded, setTotalGraded] = useState('')
  const [productList, setProductList] = useState([])
  const [collectorBadge, setCollectorBadge] = useState('')
  const [selectedImage, setSelectedImage] = useState('')

  let offset = 12;

  const setBadge = () => {

    if (parseFloat(totalSealed) > parseFloat(totalCards)) {
      setCollectorBadge('https://www.getcollectr.com/public-assets/images/sealed-collectr-icon.png')
    } else if (parseFloat(totalGraded) / parseFloat(totalCards) > 0.5) {
      setCollectorBadge('https://www.getcollectr.com/public-assets/images/graded-collectr-icon.png')
    } else {
      setCollectorBadge('https://www.getcollectr.com/public-assets/images/raw-cards-collectr-icon.png')
    }
  }

  const handleScroll = (e: any) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      offset += 12
      loadMoreProducts()
    }
  }

  const loadMoreProducts = () => {

    axios.get('https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec?offset=0&limit=100')
      .then(response => {
        setProductList(response.data.products.slice(0, offset))
    })
  }

  interface OpenModalProps {
    product_name: string;
    image_url: string;
  }

  const openModal = (e: any) => {
    for (let i in productList) {
      if (productList[i].product_name === e.target.id)
      setSelectedImage(productList[i].image_url)
    }
  }

  const closeModal = () => {
    setSelectedImage('')
  }

  useEffect(() => {
      axios.get('https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec?offset=0&limit=100')
      .then(response => {
        console.log(response.data)
        setUserAvatar(response.data.profile_photo)
        setUserName(response.data.user)
        setPortfolioValue(response.data.portfolio_value[0].price)
        setTotalCards(response.data.total_cards)
        setTotalSealed(response.data.total_sealed)
        setTotalGraded(response.data.total_graded)
        setProductList(response.data.products.slice(0, offset))
        setBadge()
    })
    window.addEventListener('scroll', handleScroll)
    
  }, [])

  return (
    <>
    <Header />
    <UserProfile
      userAvatar={userAvatar}
      userName={userName}
      portfolioValue={portfolioValue}
      totalCards={totalCards}
      totalSealed={totalSealed}
      totalGraded={totalGraded}
      collectorBadge={collectorBadge} 
    />
    {selectedImage && (
      <Modal 
        selectedImage={selectedImage}
        closeModal={closeModal} 
      />
    )}
    
    <Collection 
      collectionList={productList}
      openModal={openModal}
    />
     
    </>
  )
}

export default Home
