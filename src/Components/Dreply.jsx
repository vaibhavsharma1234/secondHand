import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { baseUrl } from "../config/api";
function Dreply({reply, adminEmail,id}) {
    const userEmail=(JSON.parse(sessionStorage.getItem('user')))?.email
    // console.log(userEmail,adminEmail,reply.name)
    const user=(JSON.parse(sessionStorage.getItem('user')))
    const {comments,setComments}=useContext(DataContext)
    const removeReply=()=>{
        alert("vaibhav")
        // console.log("comment id",id)
        // console.log("reply",reply)
        axios
            .delete(`${baseUrl}/api/comment/delete/replies/${id}/${reply._id}`)
            .then((res) => {
                
                console.log(res)
                const updatedComments = comments.map(comment => {
                    if (comment._id === id) {
                     console.log("matched",comment)
                     return res.data
                    }
                    return comment;
                  });
        
                  setComments(updatedComments);
                
            })
            .catch(error => console.log(error));
        
    }
  return (
    <div>
      <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
              />
             {reply.name}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate datetime="2022-02-12" title="February 12th, 2022">
                Feb. 12, 2022
              </time>
            </p>
          </div>
          <button
            id="dropdownComment2Button"
            data-dropdown-toggle="dropdownComment2"
            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            {user && reply.name === userEmail && ( <i  onClick={removeReply} class="fa-solid fa-trash text-xl text-red-600"></i>)}
          </button>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">
         {reply.comments}
        </p>
      </article>
    </div>
  );
}

export default Dreply;
