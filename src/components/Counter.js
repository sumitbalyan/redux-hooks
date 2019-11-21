import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT} from '../actions'

function Counter() {
const dispatch = useDispatch();
const value = useSelector(state => state.counter.value);
console.log(value)
  return (
    <p>
      Clicked: {value} times
          {' '}
      <button onClick={() => dispatch(INCREMENT)}>
        +
          </button>
      {' '}
      <button onClick={() => dispatch(DECREMENT)}>
        -
          </button>
    </p>
  )
}


export default Counter;
