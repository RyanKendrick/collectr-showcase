import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/ProfileHeader'
import UserProfile from '../components/UserProfile'
import Collection from '../components/Collection'
import Modal from '../components/Modal'
import CircularProgress from '@mui/material/CircularProgress'

const Profile: NextPage = () => {

  type productList = {
    product_name: any;
    image_url: any;
  };

  const [userAvatar, setUserAvatar] = useState('')
  const [userName, setUserName] = useState('')
  const [portfolioValue, setPortfolioValue] = useState('')
  const [totalCards, setTotalCards] = useState('') 
  const [totalSealed, setTotalSealed] = useState('')
  const [totalGraded, setTotalGraded] = useState('')
  const [productList, setProductList] = useState<productList[]>([])
  const [collectorBadge, setCollectorBadge] = useState('')
  const [selectedImage, setSelectedImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  let offset = 12;
  let limit = 12

  const setBadge = async () => {

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
      setIsLoading(true)
      offset += 16
      loadMoreProducts()
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }

  const loadMoreProducts = async () => {
    limit += 12
    await axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec?offset=0&limit=${limit}`)
      .then(response => {
          setProductList(response.data.products)
      })
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

  // For live
  // const params = new URLSearchParams(window.location.search) 
  // let referenceId = params.get('id')
  // axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/${referenceId}?offset=12&limit=${limit}`)

  // For dev
  // https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec


    useEffect(() => {
      const params = new URLSearchParams(window.location.search) 
      let referenceId = params.get('id')
      axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/${referenceId}?offset=12&limit=${limit}`)
      .then(response => {
        setUserAvatar(response.data.profile_photo)
        setUserName(response.data.user)
        let dollars = new Intl.NumberFormat(`en-US`, {
          currency: `USD`,
          style: 'currency',
        }).format(response.data.portfolio_value[0].price);
        console.log('dollars', dollars)
        setPortfolioValue(dollars)
        setTotalCards(response.data.total_cards)
        setTotalSealed(response.data.total_sealed)
        setTotalGraded(response.data.total_graded)
        setProductList(response.data.products)
        setBadge()
        console.log('useeffect')
      })
      
      window.addEventListener('scroll', handleScroll)
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Collection 
      collectionList={productList}
      openModal={openModal}
    />
    {isLoading && (
      <CircularProgress   />
    )}
    {selectedImage && (
      <Modal 
        selectedImage={selectedImage}
        closeModal={closeModal} 
      />
    )}
    </>
  )
}

export default Profile