import { useEffect, useState } from 'react'
// import { getAds } from '../ads/adsService'
import { baseUrl } from '../config/api'
import SingleCard from './SingleCard'
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import axios from 'axios'
const Cards = ({ ads, category, setAds, result }) => {
  const { input, setInput } = useContext(DataContext)
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-4">
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
