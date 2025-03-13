import { useState } from 'react'
import useCounter from './hooks/useCounter'
import { useFetch12, useFetchDynamic, useRefecth } from './hooks/useFetch'
import usePrev from './hooks/usePrev';


function App() {
  // const [postNo, setPostNo] = useState(1);

  // const { count, increaseCount } = useCounter();
  // const { data } = useFetch12();
  // const { post } = useFetchDynamic("https://jsonplaceholder.typicode.com/todos/" + postNo);

  // const { refechPost, timer } = useRefecth("https://jsonplaceholder.typicode.com/todos/10", 5000)

  /* Hook UsePrev */
  const [value, setValue] = useState(0);
  const prevCount = usePrev(value);

  return (
    <>
      {/* Hook useCounter */}
      {/* <div>{count}</div>
      <button onClick={increaseCount}>Click Me!</button> */}

      {/* Hook useFetch12; */}
      {/* <h4>I am from useFetch12 </h4>
      <div>{JSON.stringify(data)}</div>
      <div>{data.title}</div> */}



      {/* Hook useFetchDyanamic */}
      {/* <h4>I am from useFetchDynamic </h4>
      <button onClick={() => setPostNo(1)}>Post 1 !</button>
      <button onClick={() => setPostNo(2)}>Post 2 !</button>
      <button onClick={() => setPostNo(3)}>Post 3 !</button> */}

      {/* <div>{JSON.stringify(post)}</div> */}


      {/* Hook useRefecth */}
      {/* <h4>I m from useRefecth</h4>
      <div>{refechPost.title}</div>
      <div>Refeching in {timer} seconds</div> */}

      {/* Hook UsePrev */}
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {value}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  )
}
export default App
