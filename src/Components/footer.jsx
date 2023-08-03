import { Typography } from '@material-tailwind/react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 p-8 text-gray-300 mt-4">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-gray-300 text-center md:justify-between">
        <div className="flex gap-x-2 text-xl ">
          <h1>Second</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 rotate-45"
          >
            <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
          </svg>
        </div>
        <div>
        <Typography className="text-center font-normal">
        &copy; 2023 Vaibhav Sharma
      </Typography>
        </div>
       
      </div>
      <hr className="my-8 border-blue-gray-50" />

    </footer>
  )
}
