import Cards from './Cards'
import Categories from './Categories'
import Header from './Header'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Tabs } from 'flowbite-react'
// import Cards from './Cards'
import { useEffect, useState } from 'react'
// import { getAds } from '../ads/adsService'
import { baseUrl } from '../config/api'
import SingleCard from './SingleCard'
import axios from 'axios'
import Categories1 from './Categories1'
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
const Home = () => {
  // const navigate = useNavigate()
  // const user = JSON.parse(sessionStorage.getItem('user'))
  // const logout = () => {
  //   sessionStorage.clear()

  //   navigate('/')
  // }
  // useEffect(() => {
  //   logout()
  // }, [user])
  const { ads, setAds } = useContext(DataContext)
  const [category, setCategory] = useState('ALL')
  const { result, setResult } = useContext(DataContext)
  let first
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${baseUrl}/api/getads`)
        .then((adsData) => {
          // Handle the ads data
          const data = adsData.data
          // result = data
          setResult(data)
          first = ads
          setAds(data)
          console.log('Fetched ads:', adsData)
        })
        .catch((error) => {
          // Handle the error
          console.error('Error fetching ads:', error)
        })
    }
    fetchData()
  }, [])

  const filterItems = (id) => {
    console.log(id)
    if (id === 'ALL') {
      const newItems = ads.filter((item) => item.category !== id)
      setResult(() => {
        return newItems
      })
      console.log('hello from all')
      return
    }
    const newItems = ads.filter((item) => item.category === id)
    console.log('hello from here')
    // setAds(newItems)

    setResult(() => {
      return newItems
    })
    // console.log(ads)

    // setCategory(id)
  }
  return (
    <div>
      <Header />
      <Categories1 filterItems={filterItems} />
      <Cards
        ads={result}
        setAds={setAds}
        category={category}
        setCategory={setCategory}
      />
    </div>
  )
}
export default Home
