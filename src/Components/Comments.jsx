import { Textarea, Button, IconButton } from '@material-tailwind/react'
import { LinkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../config/api'
import Comment from './Comment'
export default function Comments() {
  const params = useParams()
  //   console.log(params)
  const { id } = params
  const initialValues = {
    name: '',
    postId: '',
    comments: '',
    date: new Date(),
  }
  const user = JSON.parse(sessionStorage.getItem('user'))
  const [comment, setComment] = useState(initialValues)
  const [comments, setComments] = useState([])
  const [togle, setTogle] = useState(false)
  useEffect(() => {
    let id1 = id
    const getData = async () => {
      // api call

      const token = JSON.parse(sessionStorage.getItem('token'))
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      axios.get(`${baseUrl}/api/comments/${id}`, { headers }).then((res) => {
        console.log(res)
        setComments(res.data)
      })
    }
    getData()
  }, [togle])
  const handleSubmit = async (e) => {
    // make the call for the new comment
    // add comment
    const token = JSON.parse(sessionStorage.getItem('token'))
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    axios.post(`${baseUrl}/api/comment`, comment, { headers }).then((res) => {
      console.log(res)
      setComment(initialValues)
      setTogle((prevState) => !prevState)
    })
  }
  const handleChange = (e) => {
    const name = user.data.fullname
    const email = user.data.email
    setComment({
      ...comment,
      name: name,
      postId: id,
      email: email,
      comments: e.target.value,
    })
  }
  return (
    <div className="relative w-[32rem]">
      <div className="bg-blue-500 text-white p-4 mb-4">
        <h2 className="text-2xl font-bold">COMMENTS</h2>
      </div>

      {user && (
        <div>
          <Textarea
            variant="static"
            placeholder="Your Comment"
            value={comment.comments || ''}
            onChange={(e) => handleChange(e)}
            rows={8}
          />
          <div className="w-full flex justify-between py-1.5">
            <IconButton variant="text" color="blue-gray" size="sm">
              <LinkIcon strokeWidth={2} className="w-4 h-4" />
            </IconButton>
            <div className="flex gap-2">
              <Button
                size="sm"
                color="red"
                variant="text"
                className="rounded-md"
              >
                Cancel
              </Button>
              <Button size="sm" className="rounded-md" onClick={handleSubmit}>
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      )}

      <div>
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => {
            return <Comment comment={comment} setTogle={setTogle} />
          })}
      </div>
    </div>
  )
}
