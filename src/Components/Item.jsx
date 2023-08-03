import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../config/api'
import SlideShow from './SlideShow'
import { useNavigate } from 'react-router-dom'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { Tooltip } from '@material-tailwind/react'
import { Card } from 'flowbite-react';
import Header from './Header'
import Comments from './Comments'

const Item = () => {
  const params = useParams()
  console.log(params)
  const { id } = params
  const loggedUser = JSON.parse(sessionStorage.getItem('user'))
  // console.log('hello')
  // console.log(loggedUser.email)
  const [singlePost, setSinglePost] = useState({
    title: '',
    description: '',
    brand: '',
    location: '',
    category: '',
    price: null,
    images: [],
    image1: '',
  })
  const [images1, setImages] = useState([])
  // let loggedUser
  const [user, setUser] = useState('')
  // let user = ''
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${baseUrl}/api/getads/${id}`).then((res) => {
        // console.log(res.data.images)
        setSinglePost(res.data)
        console.log(res.data)
        setUser(res.data.user)
        // console.log('hello')
        // console.log(user.email)

        setImages(res.data.images)
        console.log(res.data.images)
      })
    }
    fetchData()
  }, [])
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    console.log(id)
    axios.delete(`${baseUrl}/api/delete/${id}`).then(() => {
      //  window.location.reload(false)
      navigate('/')
    })
  }
  const handleUpdate = async (id) => {
    navigate(`/update/${id}`)
  }
  const handleClick = () => {
    navigate('/')
  }
  const {
    title,
    description,
    brand,
    location,
    category,
    price,
    images,
    image1,
  } = singlePost
  const obj={
    'ALL': 'ALL', 
   'LAF': 'Lost and Found',
    'ELE': 'Electronic',
   'STD': 'Study',
    'OT':  'Others',
  }
  const categoryDisplay = obj[category]
  return (
    <div
    
    >
     
      <Header />
      
      <div className="flex m-8 flex-col shadow-2xl rounded border-2 ">
       
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className=" mx-auto flex flex-col justify-evenly lg:flex-row ">
             
              <Card className='mr-2 '
               
              >
                <img src= {image1}/>
              </Card>

              <Card className='mt-3 md:mt-0'>
              <div className=" w-full  ">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-purple-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-purple-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-purple-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-purple-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-purple-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">{location}</span>
                    <span className="mr-3">{categoryDisplay}</span>
                  </div>
                </div>
                <div className="flex flex-row gap-x-6">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {price} Rs
                  </span>

                  {loggedUser && user.email === loggedUser.email && (
                    <div className="flex flex-row gap-4">
                      <Tooltip content="deleteAd">
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                          <TrashIcon
                            onClick={() => handleDelete(id)}
                            className="h-5 w-5"
                          />
                        </span>
                      </Tooltip>
                      <Tooltip content="UpdateAd">
                        <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                          <PencilSquareIcon
                            onClick={() => handleUpdate(id)}
                            className="h-5 w-5"
                          />
                        </span>
                      </Tooltip>
                    </div>
                  )}
                </div>
              </div>

              </Card>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center ">
          <Comments />
        </div>
      </div>
    </div>
  )
}
export default Item
