import type { NextPage } from 'next'
import axios from 'axios'
import Header from '../components/Header'

const Home: NextPage = () => {

  axios.get('https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/18afaa5e-c0f5-4942-9a5c-5ad8980782ec?offset=0&limit=100')
    .then(response => {
      console.log('response.data', response.data)
    })

  return (
    <>
    <Header />
    </>
  )
}

export default Home
