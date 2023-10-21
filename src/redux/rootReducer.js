// rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your individual reducers
import authReducer from './authSlice';
import productReducer from './dataSlice'
import commentsReducer from './commentsSlice';
// Import additional reducers as needed

const rootReducer = combineReducers({
  counter: counterReducer, // Assign each reducer to a key in the state
  auth: authReducer,
  product:productReducer,
  comments:commentsReducer
  
  // Add more reducers here
});

export default rootReducer;
