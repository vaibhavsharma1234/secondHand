import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, setComments } from '../redux/commentsSlice'; // Import Redux actions
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios';
  import Dcomment from './Dcomment'
  import { baseUrl } from '../config/api';
function DComments() {
  const params = useParams();
  const { id } = params;
  const user = useSelector((state) => state.auth.user); // Access user from Redux store
  const comments = useSelector((state) => state.comments); // Access comments from Redux store
  const dispatch = useDispatch(); // Initialize the Redux dispatch function
  const token = useSelector((state) => state.auth.token)
  const initialValues = {
    name: '',
    postId: id,
    email: '',
    date: new Date(),
    comments: '',
  };

  const [comment, setComment] = useState(initialValues);
  const [togle, setTogle] = useState(false);

  // Fetch comments from API
  useEffect(() => {
    if (!togle) {
     
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/api/comments/${id}`, { headers }).then((res) => {
        console.log(res);
        dispatch(setComments(res.data)); // Dispatch the comments to the Redux store
      });
    }
  }, [togle]);

  const handleChange = (e) => {
    // Handle comment changes
    const name = user.data.fullname;
    const email = user.data.email;
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    setComment({
      ...comment,
      name: name,
      postId: id,
      email: email,
      date: formattedDate,
      comments: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast('Login first');
      return;
    }
   
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Send a new comment to the API and dispatch it to the Redux store
    axios.post(`${baseUrl}/api/comment`, comment, { headers }).then((res) => {
      dispatch(addComment(res.data));
      console.log("res",res)
      setTogle((prevState) => !prevState);
      setComment(initialValues);
    });
  };

  return (
    <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
      <ToastContainer/>
      <div class="w-full md:w-3/4 mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Discussion
          </h2>
        </div>
        <form class="mb-6">
          <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              rows="6"
              value={comment.comments || ""}
              onChange={(e) => handleChange(e)}
              class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            onClick={(user)?handleSubmit:null} disabled={comment.comments===""}
            class={`inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-white ${(user)?"bg-blue-700":"bg-blue-400"} rounded-lg dark:focus:ring-primary-900 hover:bg-primary-800`}
          >
            Post comment
          </button>
          <button 
          onClick={(e)=>{
            e.preventDefault();
            setComment("")}}
          class="inline-flex items-center py-2.5 px-4 text-red-600 text-sm font-semibold text-center rounded-lg hover:bg-primary-800">
            Cancel
          </button>
        </form>
        <section>
          {comments &&
            comments.length > 0 &&
            comments.map((comment) => {
              return <Dcomment comment={comment} setTogle={setTogle}/>
             
            })}
        </section>
      </div>
    </section>
  );
}

export default DComments;
