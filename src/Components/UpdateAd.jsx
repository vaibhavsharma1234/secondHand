import { useState, useEffect } from 'react'
import { baseUrl } from '../config/api'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Updatead = () => {
  const params = useParams()
  console.log(params)
  const { id } = params
  const [singlePost, setSinglePost] = useState({
    title: '',
    description: '',
    brand: '',
    location: '',
    category: '',
    price: null,
    images: [],
  })
  const [images1, setImages] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${baseUrl}/api/getads/${id}`).then((res) => {
        console.log(res.data.images)
        setSinglePost(res.data)
        setImages(res.data.images)
      })
    }
    fetchData()
  }, [])
  const { title, price, description, brand, location, category } = singlePost
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
    setSinglePost({ ...singlePost, [e.target.name]: e.target.value })
    console.log(singlePost)
  }
  const handleDropDown = (e) => {
    setSinglePost({ ...singlePost, category: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = JSON.parse(sessionStorage.getItem('token'))

    const headers = {
      Authorization: `Bearer ${token}`,
    }

    const user1 = await axios({
      method: 'put',
      url: `${baseUrl}/api/update/${id}`,
      data: singlePost,
      headers: headers,
    })
    console.log(user1)

    if (user1.data.success) {
      navigate('/')
      console.log(user1)
    }
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
                  //   defaultValue=""
                  id="name"
                  value={title || ''}
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
                  //   defaultValue=""
                  id="brand"
                  value={brand || ''}
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
                  value={price || ''}
                  //   defaultValue=""
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Rs.2999"
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
                  value={category || ''}
                  //   defaultValue=""
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
                  //   defaultValue=""
                  id="location"
                  value={location || ''}
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
                  //   defaultValue=""
                  value={description || ''}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  //   defaultValue={''}
                />
              </div>

              {/* <FileUpload1
                allValues={singlePost}
                setAllValues={setSinglePost}
              /> */}
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
export default Updatead
