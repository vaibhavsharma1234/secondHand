import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Tooltip,
} from '@material-tailwind/react'
// import { ArrowUTurnIcon } from 'hero'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
// import {  } from '@material-tailwind/react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import Header from './Header'
import { baseUrl } from '../config/api'
export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [key, setKey] = useState(0)
  // const baseUrl = 'http://localhost:8000'
  const clearClickHandler = () => setKey((k) => k + 1)
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    // console.log('hello')
    console.log(name, email, password)
    const data = {
      fullname: name,
      email,
      password,
    }
    // sent the data to the backend now
    axios.post(`${baseUrl}/api/auth/signup`, data).then((res) => {
      // console.log(res)
      const { success } = res.data
      console.log(success)
      // if(res)
      if (success) {
        setName('')
        setEmail('')
        setPassword('')
        clearClickHandler()
        navigate('/login')
        // navigate to  the login page
      } else {
        alert('error hai vapas try kro from signup')
      }
    })
  }
  const handleClickBack = () => {
    navigate('/')
  }
  return (
    <>
      {/* <Header /> */}
      <div>
        <Tooltip content="go-back">
          <span
            onClick={handleClickBack}
            className="cursor-pointer block w-12 rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70"
          >
            <ArrowUturnLeftIcon className="h-5 w-5" />
          </span>
        </Tooltip>
      </div>
      <div className="flex items-center justify-center h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray" className="text-center">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
            onSubmit={handleClick}
            key={key}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                size="lg"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                size="lg"
                value={password}
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                  defaultChecked={false}
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <Button className="mt-6" type="submit" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  )
}
