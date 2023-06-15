import { useEffect, useState } from 'react'
// import { getAds } from '../ads/adsService'
import { baseUrl } from '../config/api'
import SingleCard from './SingleCard'
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import axios from 'axios'
const Cards = ({ ads, category, setAds, result }) => {
  const { input, setInput } = useContext(DataContext)
  // let res = ads
  // let def = ads
  // const filterItems = (category) => {
  //   // console.log(id)
  //   if (category === 'ALL') {
  //     setAds(def)
  //     res = def
  //     console.log('hello from all')
  //     return
  //   }
  //   res = ads.filter((item) => {
  //     item.category === category
  //     console.log(item)
  //   })
  //   console.log('hello from here')
  //   setAds(res)
  //   // setCategory(id)
  // }
  // useEffect(() => {
  //   filterItems
  // }, [category])
  // setAds(result)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {ads
        .filter((post) => {
          if (input === '') {
            return post
          } else if (post.title.toLowerCase().includes(input.toLowerCase())) {
            return post
          }
        })
        .map((item) => {
          return <SingleCard {...item} key={item._id} />
        })}
    </div>
  )
}
export default Cards
