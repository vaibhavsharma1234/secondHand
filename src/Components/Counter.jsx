// YourComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../redux/counterSlice';

function YourComponent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default YourComponent;
