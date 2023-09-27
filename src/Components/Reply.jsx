import React from "react";
import { TrashIcon } from '@heroicons/react/24/solid'
import { baseUrl } from "../config/api";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
function Reply({ reply, adminEmail,id }) {
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
    <>
    
        <div
          key={reply._id}
          className="flex flex-col p-4 mb-2 items-end bg-blue-gray-300 rounded"
        >
          <p> email : {reply.name}</p>
          <p>{reply.comments}</p>
          {user && reply.name === userEmail && (
          <button  onClick={()=>removeReply()} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <TrashIcon  />
          </button>
        )}

        </div>
      
    </>
  );
}

export default Reply;
