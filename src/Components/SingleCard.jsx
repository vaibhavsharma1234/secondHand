import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@material-tailwind/react'
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
  CurrencyRupeeIcon,
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../config/api'
import axios from 'axios'
export default function SingleCard({
  brand,
  category,
  location,
  price,
  title,
  description,
  images,
  _id,
  user,
  image1,
}) {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/getads/${id}`)
  }
  const loggedUser = JSON.parse(sessionStorage.getItem('user'))
  console.log(loggedUser)
  // console.log(loggedUser._id)
  const handleDelete = async (id) => {
    console.log(id)
    axios.delete(`${baseUrl}/api/delete/${id}`).then(() => {
      window.location.reload(false)
      navigate('/')
    })
  }
  const handleUpdate = (id) => {
    navigate(`/update/${id}`)
  }
  
    const obj={
      'ALL': 'ALL', 
     'LAF': 'Lost and Found',
      'ELE': 'Electronic',
     'STD': 'Study',
      'OT':  'Others',
    }
    const categoryDisplay = obj[category]
  return (

    <Card className="w-full bg-white rounded-lg shadow-lg mt-4 overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2  p-4" onClick={() => handleClick(_id)}>
      <CardHeader floated={false} className='h-[25vh]' color="blue-gray">
        <img src={image1} className="w-full  object-cover rounded-t-lg" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between">


          <h1 className='font-bold text-xl'>{title}</h1>
          {/* <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </Typography> */}
        </div>
        <div className='font-medium text-base'>Brand: {brand}</div>
        {/* <Typography variant="h5" color="blue-gray" className="font-medium">
          {brand}
        </Typography> */}
        {/* <Typography className="overflow-hidden h-[20vh] md:h-[10vh]" color="gray">{description.length> 230 ? description.slice(0,230) + '...':description}</Typography> */}

        <div className='font-semibold text-base'>Category: {categoryDisplay}</div>
        {/* <Typography variant="h5" color="blue-gray" className="font-medium">
          {categoryDisplay}
        </Typography> */}

        <div className='text-base font-semibold'>Rs. {price}</div>
        <div>Location: {location}</div>
        <div className="group inline-flex flex-wrap items-center gap-3">
          {/* <Tooltip content={`${price}rupees`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <CurrencyRupeeIcon className="h-5 w-5" />
            </span>
          </Tooltip> */}

          {/* <Tooltip content={location}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip> */}
          {/* <Tooltip content={location}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <HomeIcon className="h-5 w-5" />
            </span>
          </Tooltip> */}

          {loggedUser && user === loggedUser._id && (
            <div className="flex flex-row gap-4">
              <Tooltip content="deleteAd">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <TrashIcon
                    onClick={() => handleDelete(_id)}
                    className="h-5 w-5"
                  />
                </span>
              </Tooltip>
              <Tooltip content="UpdateAd">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <PencilSquareIcon
                    onClick={() => handleUpdate(_id)}
                    className="h-5 w-5"
                  />
                </span>
              </Tooltip>
            </div>
          )}

          {/* <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="And +20 more">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              +20
            </span>
          </Tooltip> */}
        </div>
      </CardBody>
      {/* <CardFooter className="pt-0" onClick={() => handleClick(_id)}>
        <Button size="lg" fullWidth={true}>
          Click Me For Details
        </Button>
      </CardFooter> */}
    </Card>
  )
}
