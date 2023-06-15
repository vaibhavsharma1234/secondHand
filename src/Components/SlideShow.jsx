import { Carousel } from '@material-tailwind/react'

export default function SlideShow(props) {
  console.log(props)
  const images = props.img
  return (
    <Carousel className="rounded-xl">
      <img
        src={`../uploads/${images[0]}`}
        alt="image 1"
        className="h-full w-full object-cover"
      />
    </Carousel>
  )
}
