// commentsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    setComments: (state, action) => {
      return action.payload;
    },
    addComment: (state, action) => {
      state.push(action.payload.newcomment);
    },
    addReply: (state, action) => {
      // Find the comment by ID and add the reply
      const { commentId, reply } = action.payload;
      console.log("reply payload", reply);
      const comment = state.find((c) => c._id === commentId);
      if (comment) {
        if (!comment.replies) {
          comment.replies = [];
        }
        comment.replies = reply.replies;
      }
    },
    removeComment: (state, action) => {
      // Handle removing a comment
      const commentId = action.payload;
      return state.filter((comment) => comment._id !== commentId);
    },
    removeReplyLocally: (state, action) => {
      const { id, replyId } = action.payload;
    //   console.log("state", state);
      const comment = state.find((c) => c._id===id);
      // const comment = state.comments.find((c) => c._id === id);
    //   console.log("found comment",comment)
    //   console.log("action payload", action.payload);
      if (comment) {
        comment.replies = comment.replies.filter((reply) => reply._id !== replyId);
      }
    },
  },
});

export const {
  setComments,
  addComment,
  addReply,
  removeComment,
  removeReplyLocally,
} = commentsSlice.actions;
export default commentsSlice.reducer;
