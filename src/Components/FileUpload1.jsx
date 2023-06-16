import React, { useEffect, useState } from 'react'
import ImageUploading from 'react-images-uploading'
import '../styles/fileupload.css'
import edit from '../images/pencil-square.svg'
import deleteIcon from '../images/x-square-fill.svg'
import {
  TrashIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/solid'
import { Tooltip } from '@material-tailwind/react'
import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import { baseUrl } from '../config/api'
import axios from 'axios'
export function FileUpload1({ allValues, setAllValues, file, setFile }) {
  const { imageval, setImageVal } = useContext(DataContext)
  // const [file, setFile] = useState('')
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData()
        // hummen data dala hai taki bhj paye
        data.append('name', file.name)
        data.append('file', file)

        // api call toupload image then i will get url  then put urlin post.picture
        let res = await axios.post(`${baseUrl}/api/file/upload`, data)
        console.log(res.data)
        setImageVal(res.data) // todo
        setFile(res.data)
      }
    }
    getImage()
    // post.categories = location.search?.split('=')[1] || 'ALL'
    // post.username = account.username
  }, [file])

  const maxNumber = 1

  const onChange = (imageList) => {
    setAllValues({
      ...allValues,
      images: imageList,
    })
    setImageVal(imageList)
    console.log(imageList)
  }

  return (
    <div className="file_uploads">
      <div>
        <label htmlFor="fileInput">
          <PlusCircleIcon fontSize="small" className="w-10" color="action" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {file && <h2>file uploaded</h2>}
      </div>
      {/* <ImageUploading
        multiple
        value={allValues.images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="file_upload_button"
              type="button"
            >
              <img
                src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg"
                alt="img"
              />
            </button>
            &nbsp;
            <div style={{ display: 'flex' }}>
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="image-item mt-2 me-3 position-relative"
                >
                  <img
                    src={image['data_url']}
                    alt=""
                    width="100"
                    style={{ height: '100px' }}
                  />
                  <Tooltip content="deleteImg">
                    <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                      <TrashIcon
                        onClick={() => onImageRemove(index)}
                        className="h-5 w-5"
                      />
                    </span>
                  </Tooltip>
                  <Tooltip content="updateImg">
                    <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                      <PencilSquareIcon
                        onClick={() => onImageUpdate(index)}
                        className="h-5 w-5"
                      />
                    </span>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading> */}
    </div>
  )
}
