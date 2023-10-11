import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { baseUrl } from "../config/api";
import Dcomment from "./Dcomment";
import Dreply from "./Dreply";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function DComments() {
  const params = useParams();
  const { id } = params;
  const initialValues = {
    name: "",
    postId: "",
    email: "",

    date: new Date(),
    comments: "",
  };
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [comment, setComment] = useState(initialValues);
  const { comments, setComments } = useContext(DataContext);
  const [togle, setTogle] = useState(false);
  const [showMoreReplies, setShowMoreReplies] = useState(false);

  // ... (other code)

  const toggleReplies = () => {
    setShowMoreReplies((prevState) => !prevState);
  };
  useEffect(() => {
    let id1 = id;
    const getData = async () => {
      // api call

      const token = JSON.parse(sessionStorage.getItem("token"));
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios.get(`${baseUrl}/api/comments/${id}`, { headers }).then((res) => {
        console.log(res);
        setComments(res.data);
      });
    };
    getData();
  }, [togle]);
  const handleChange = (e) => {
    const name = user.data.fullname;
    const email = user.data.email;
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = today.toLocaleDateString(undefined, options);
    setComment({
      ...comment,
      name: name,
      postId: id,
      email: email,
      date: formattedDate,
      comments: e.target.value,
    });
    console.log(comment);
  };
  const handleSubmit = async (e) => {
    // make the call for the new comment
    // add comment
    e.preventDefault();
    if(!user){
      toast("login first")
      return
    }
    const token = JSON.parse(sessionStorage.getItem("token"));
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios.post(`${baseUrl}/api/comment`, comment, { headers }).then((res) => {
      console.log(res);

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
