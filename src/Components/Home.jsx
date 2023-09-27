import Cards from './Cards'
import Categories from './Categories'
import Categories2 from './Categories2'
import Header from './Header'
import Footer from './footer'
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
      {/* <Categories1 filterItems={filterItems} /> */}
      <Categories2 filterItems={filterItems} />
      <div  className="m-8 shadow-2xl rounded border-2 ">
        {ads.length > 0 ? (
          <Cards
            ads={result}
            setAds={setAds}
            category={category}
            setCategory={setCategory}
          />
        ) : (
          <div className="flex justify-center items-center h-[50vh] ">
            <div
              className="inline-block  h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
export default Home
