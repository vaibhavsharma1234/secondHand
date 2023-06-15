import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from '@material-tailwind/react'
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import toast from 'react-hot-toast'

export default function Header() {
  const { input, setInput } = useContext(DataContext)
  const { result, setResult } = useContext(DataContext)
  useEffect(() => {
    // search filter ko call kro
    console.log(input)
  }, [input])
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user'))
  const logout = () => {
    sessionStorage.clear()

    navigate('/')
  }
  const notify = () => {
    alert('first login ')
  }
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
      <div className="flex flex-wrap items-center justify-between  gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          <div className="flex gap-x-2">
            Second
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 rotate-45"
            >
              <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
            </svg>
          </div>
        </Typography>

        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            value={input || ''}
            onChange={(e) => setInput(e.target.value)}
            containerProps={{
              className: 'min-w-[288px]',
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
        {!user && (
          <div className="ml-auto flex gap-1 md:mr-4">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href="/login" className="flex items-center">
                Login
              </a>
            </Typography>{' '}
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href="/signup" className="flex items-center">
                Register
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a
                href="#"
                onClick={() => notify()}
                className="flex items-center"
              >
                Sell
              </a>
            </Typography>
          </div>
        )}
        {user && (
          <div className="ml-auto flex gap-2 md:mr-4">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href="/" onClick={logout} className="flex items-center">
                Logout
              </a>
            </Typography>{' '}
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href="/postad" className="flex items-center">
                Sell
              </a>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <a href="/myads" className="flex items-center">
                myads
              </a>
            </Typography>
          </div>
        )}
      </div>
    </Navbar>
  )
}
