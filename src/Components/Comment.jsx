import { useContext } from 'react'
// import { DataContext } from '../../../context/DataProvider'
// import { Box, Typography, styled } from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
// import { getAccessToken } from '../../../utils/common-utils'
// import { API_URL } from '../../../service/api'
import { Typography,Card } from '@material-tailwind/react'
import { TrashIcon } from '@heroicons/react/24/solid'
import { baseUrl } from '../config/api'
const Comment = ({ comment, setTogle }) => {
  //   const { account } = useContext(DataContext)
  const removeComment = async () => {
    const id = comment._id
    // let res = await axios.delete(`${API_URL}/comment/delete/${id}`, {
    //   headers: {
    //     authorization: getAccessToken(),
    //   },
    // })
    const token = JSON.parse(sessionStorage.getItem('token'))
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    axios
      .delete(`${baseUrl}/api/comment/delete/${id}`, { headers })
      .then((res) => {
        console.log(res)
        //   setComment(initialValues)
        setTogle((prevState) => !prevState)
      })
  }

  const user = JSON.parse(sessionStorage.getItem('user'))
  return (
    <div className="comment bg-blue-200  p-4 rounded-md mb-4">
      <div className="comment-header flex items-center mb-2">
        <p className="comment-name font-bold mr-2">{comment.name}</p>
        <p className="comment-date text-gray-600">
          {new Date(comment.date).toDateString()}
        </p>
        {user && comment.email === user.data.email && (
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <TrashIcon onClick={() => removeComment()} />
          </button>
        )}
      </div>
      <div className="comment-content ml-6">
        <p className="comment-text text-gray-800">{comment.comments}</p>
      </div>
    </div>
  )
}
export default Comment
