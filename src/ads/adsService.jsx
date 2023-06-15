import axios from 'axios'

// Define a function to fetch ads data
import { baseUrl } from '../config/api'
// import axios from 'axios'
// export async function getAds() {
//   try {
//     const response = await axios.get(`${baseUrl}/api/getads`)
//     if (response.ok) {
//       const data = response.ads
//       return data
//     } else {
//       const error = new Error('Failed to fetch ads')
//       throw error
//     }
//   } catch (error) {
//     // Handle the error
//     console.error('Error fetching ads:', error)
//     throw error
//   }
// }
export const getAds = async () => {
  const ads = await axios.get(`${baseUrl}/api/getads`)
  console.log(ads)
  //   return ads.data
}

// Call the getAds function and handle the result
// getAds()
//   .then((adsData) => {
//     // Handle the ads data
//     console.log('Fetched ads:', adsData)
//   })
//   .catch((error) => {
//     // Handle the error
//     console.error('Error fetching ads:', error)
//   })
