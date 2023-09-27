import { Textarea, Button, IconButton } from '@material-tailwind/react'
import { LinkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../context/DataContext'
import { baseUrl } from '../config/api'
import Comment from './Comment'
import { NewComment } from './NewComment'
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
  const {comments, setComments} = useContext(DataContext)
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
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);
    setComment({
      ...comment,
      name: name,
      postId: id,
      email: email,
      date:formattedDate,
      comments: e.target.value,
    })
  }
  return (
    <div className="relative w-[60vw] m-4">
      <div className="text-center text-black p-4 mb-4">
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

    
      <div className='grid grid-cols-1  md:grid-cols-2 gap-4 w-[100%]  mt-2 '  >
        {
          comments && comments.length>0 && 
          comments.map((comment)=>{
            return < NewComment   comment={comment} setTogle={setTogle}/>
          })
        }
      </div>
    </div>
  )
}
