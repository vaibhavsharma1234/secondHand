import { FileUpload } from './FileUpload'
import { useState } from 'react'
import { FileUpload1 } from './FileUpload1'
import { baseUrl } from '../config/api'
import { useNavigate } from 'react-router-dom'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
const Postad = () => {
  const [allValues, setAllValues] = useState({
    title: '',
    description: '',
    brand: '',
    location: '',
    category: '',
    price: null,
    images: [],
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
    console.log(allValues)
  }
  // const [file, setFile] = useState('')
  const handleDropDown = (e) => {
    setAllValues({ ...allValues, category: e.target.value })
  }
  // console.log(file)
  // useEffect(() => {
  //   const getImage = async () => {
  //     if (file) {
  //       const data = new FormData()
  //       // hummen data dala hai taki bhj paye
  //       data.append('name', file.name)
  //       data.append('file', file)

  //       // api call toupload image then i will get url  then put urlin post.picture
  //       let res = await axios.post(`${API_URL}/file/upload`, data)
  //       post.picture = res.data // todo
  //     }
  //   }
  //   getImage()
  //   post.categories = location.search?.split('=')[1] || 'ALL'
  //   post.username = account.username
  // }, [file])
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(allValues)
    const formData = new FormData()
    for (let i = 0; i < allValues.images.length; i++) {
      formData.append('images', allValues.images[i].file)
    }
    formData.append('title', allValues.title)
    formData.append('brand', allValues.brand)
    formData.append('category', allValues.category)

    formData.append('description', allValues.description)
    formData.append('location', allValues.location)
    formData.append('price', allValues.price)
    // alert(formData)
    // make the api call
    const token = JSON.parse(sessionStorage.getItem('token'))
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    axios.post(`${baseUrl}/api/postad`, formData, { headers }).then((res) => {
      console.log(res)
    })
    setAllValues({
      title: '',
      description: '',
      brand: '',
      condition: '',
      category: 'Mobile Phones',
      price: null,
      images: [],
      location: '',
    })

    navigate('/')
    window.location.reload(false)
  }
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  onChange={handleChange}
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  onChange={handleDropDown}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected>Select category</option>
                  <option value="LAF">Lost and found</option>
                  <option value="ELE">Electronic</option>
                  <option value="STD">Study</option>
                  <option value="OT">others</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hostel Name and Room No
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder={''}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  defaultValue={''}
                />
              </div>

              <FileUpload1 allValues={allValues} setAllValues={setAllValues} />
              {/* <div>
                <label htmlFor="fileInput">
                  <PlusCircleIcon
                    fontSize="small"
                    className="w-10"
                    color="action"
                  />
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                {file && <h2>file uploaded</h2>}
              </div> */}
            </div>
            <button
              type="submit"
              className=" bg-black inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
export default Postad
