import React from "react";
import Dreply from "./Dreply";
import { useState,useContext } from "react";
import axios from "axios";
import { baseUrl } from "../config/api";
import { DataContext } from "../context/DataContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Dcomment({ comment,setTogle }) {
  const [newReply, setNewReply] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { comments, setComments } = useContext(DataContext);
  const id = comment._id;
  // reply
  const [showMoreReplies, setShowMoreReplies] = useState(false);

  // ... (other code)

  const toggleReplies = () => {
    setShowMoreReplies((prevState) => !prevState);
  };
  const submitReply = (commentId) => {
    if(!user){
        toast("login first")
        return 
    }
    console.log(newReply);
    console.log(commentId);
    // call to insert the reply
    const userEmail = JSON.parse(sessionStorage.getItem("user"));
    console.log(userEmail.email);
    axios
      .post(`${baseUrl}/api/comments/${commentId}/replies`, {
        text: newReply,
        email: userEmail.email,
      })
      .then((response) => {
        //     console.log("first",comments)
        const updatedComments = comments.map((comment) => {
          if (comment._id === commentId) {
            console.log("matched", comment);
            comment.replies = response.data.replies;
          }
          return comment;
        });

        setComments(updatedComments);
        //   console.log("third",comments)
        console.log(response);
        setNewReply("");
      })
      .catch((error) => console.log(error));
  };
  const removeComment = async () => {
    const id = comment._id;
    // let res = await axios.delete(`${API_URL}/comment/delete/${id}`, {
    //   headers: {
    //     authorization: getAccessToken(),
    //   },
    // })
    const token = JSON.parse(sessionStorage.getItem("token"));
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .delete(`${baseUrl}/api/comment/delete/${id}`, { headers })
      .then((res) => {
        console.log(res);
        //   setComment(initialValues)
        setTogle((prevState) => !prevState);
      });
  };
  return (
    <div>
        <ToastContainer/>
      <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
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
          {user && comment.email === user.data.email && (<i onClick={removeComment} class="fa-solid fa-trash text-xl text-red-600"></i>)}  
           
          </button>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{comment.comments}</p>
        {/* reply  */}
        <div class="flex items-center mt-4 space-x-4">
          <input
            class="px-2 w-full text-sm rounded-lg mr-2 text-gray-900 border-[1px] focus:outline-none focus:ring-0 py-2"
            placeholder="Write a reply..."
            required
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
          />
          <span
            onClick={() => submitReply(id)}
            className="inline-flex items-center py-2.5 px-4 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Reply
          </span>
        </div>
      </article>
      {comment.replies .slice(0, showMoreReplies ? undefined : 2).map((reply) => (
        <Dreply reply={reply} adminEmail={comment.email} id={comment._id} />
      ))}
      {comment.replies.length > 2 && (
        <button
          onClick={toggleReplies}
          className="text-blue-500 underline cursor-pointer"
        >
          {showMoreReplies ? "Show Less Replies" : "Show More Replies"}
        </button>
      )}
    </div>
  );
}

export default Dcomment;
