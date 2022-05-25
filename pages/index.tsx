import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import UserProfile from '../components/UserProfile'
import Collection from '../components/Collection'

const Home: NextPage = () => {

  const [userAvatar, setUserAvatar] = useState('')
  const [userName, setUserName] = useState('')
  const [portfolioValue, setPortfolioValue] = useState(0)
  const [totalCards, setTotalCards] = useState('')
  const [totalSealed, setTotalSealed] = useState('')
  const [totalGraded, setTotalGraded] = useState('')
  const [productList, setProductList] = useState([])

  let offset = 12;

  const handleScroll = (e: any) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      offset += 12
      loadMoreProducts()
      console.log('handlescroll')
    }
    // console.log('top', e.target.documentElement.scrollTop)
    // console.log('win', window.innerHeight)
    // console.log('height', e.target.documentElement.scrollHeight)
  }

  const loadMoreProducts = () => {
    axios.get('https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec?offset=0&limit=100')
      .then(response => {
        setProductList(response.data.products.slice(0, offset))
    })
  }

  useEffect(() => {
    axios.get('https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec?offset=0&limit=100')
      .then(response => {
        console.log('response.data', response.data)
        console.log('useravatar', response.data.profile_photo)
        setUserAvatar(response.data.profile_photo)
        setUserName(response.data.user)
        setPortfolioValue(response.data.portfolio_value[0].price)
        setTotalCards(response.data.total_cards)
        setTotalSealed(response.data.total_sealed)
        setTotalGraded(response.data.total_graded)
        setProductList(response.data.products.slice(0, offset))
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
    />
    <Collection 
        collectionList={productList}
    />
    </>
  )
}

export default Home
