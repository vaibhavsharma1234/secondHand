import { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { baseUrl } from '../config/api'
const Myads = () => {
  const [myAds, setMyAds] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const token = JSON.parse(sessionStorage.getItem('token'))

      const headers = {
        Authorization: `Bearer ${token}`,
      }
      await axios
        .get(`${baseUrl}/api/myads`, { headers })
        .then((adsData) => {
          // Handle the ads data
          const data = adsData.data
          // result = data
          //   setResult(data)
          //   first = ads
          setMyAds(data)
          console.log(data)
          console.log('Fetched ads:', adsData)
        })
        .catch((error) => {
          // Handle the error
          console.error('Error fetching ads:', error)
        })
    }
    fetchData()
  }, [])

  return (
    <div>
      Myads
      <Cards ads={myAds} />
    </div>
  )
}
export default Myads
