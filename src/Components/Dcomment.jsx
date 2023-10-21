import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReply, removeComment } from '../redux/commentsSlice'; // Import Redux actions
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dreply from './Dreply'
import { baseUrl } from '../config/api';
import axios from 'axios';


function Dcomment({ comment, setTogle }) {
  const [newReply, setNewReply] = useState('');
  const dispatch = useDispatch(); // Initialize the Redux dispatch function
//  console.log("comment",comment)
  const user = useSelector((state)=>state.auth.user);
const token =useSelector((state)=>state.auth.token)
  const id = comment._id;

  const submitReply = (commentId) => {
    if (!user) {
      toast('Login first');
      return;
    }

    // Create a new reply
    const userEmail = user.data.email;
    axios
      .post(`${baseUrl}/api/comments/${commentId}/replies`, {
        text: newReply,
        email: userEmail,
      })
      .then((response) => {
        // Dispatch the new reply to the Redux store
        dispatch(addReply({ commentId, reply: response.data }));
        setNewReply('');
      })
      .catch((error) => console.log(error));
  };

  const removeCommentx = async () => {
    // Make the API call to delete the comment
    // const token = JSON.parse(sessionStorage.getItem('token'));
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .delete(`${baseUrl}/api/comment/delete/${comment._id}`, { headers })
      .then((res) => {
        console.log(res);
        toast('Deleted comment success');

        // Dispatch the action to remove the comment from the Redux store
        dispatch(removeComment(comment._id));

        setTogle((prevState) => !prevState);
      });
  };
  return (
    <div>
        <ToastContainer/>
      <article class="p-0 md:p-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />
              {comment.name}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                {new Date(comment.date).toDateString()}
              </time>
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
          {user && comment.email === user.data.email && (<i onClick={removeCommentx} class="fa-solid fa-trash text-xl text-red-600"></i>)}  
           
          </button>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{comment.comments}</p>
        {/* reply  */}
        <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          submitReply(id)}} class="flex items-center mt-4 space-x-4">
          <input
            class="px-2 w-full text-sm rounded-lg mr-2 text-gray-900 border-[1px] focus:outline-none focus:ring-0 py-2"
            placeholder="Write a reply..."
            required
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
          <button
          type="submit"
            className={`inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-white ${(user)?"bg-blue-700":"bg-blue-400"} cursor-pointer rounded-lg dark:focus:ring-primary-900 hover:bg-primary-800`}
          >
            Reply
          </button>
          </form>
        </div>
      </article>
      {comment.replies?.map((reply) => (
        <Dreply reply={reply} adminEmail={comment.email} id={comment._id} />
      ))}
      
    </div>
  );
}

export default Dcomment;
