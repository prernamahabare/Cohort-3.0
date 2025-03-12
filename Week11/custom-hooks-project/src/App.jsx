import { useState } from 'react'
import useCounter from './hooks/useCounter'
import { useFetch12, useFetchDynamic, useRefecth } from './hooks/useFetch'

function App() {
  const [postNo, setPostNo] = useState(1);

  const { count, increaseCount } = useCounter();
  const { data } = useFetch12();
  const { post } = useFetchDynamic("https://jsonplaceholder.typicode.com/todos/" + postNo);

  const { refechPost, timer } = useRefecth("https://jsonplaceholder.typicode.com/todos/10", 5000)

  return (
    <>
      {/* Hook useCounter */}
      <div>{count}</div>
      <button onClick={increaseCount}>Click Me!</button>

      {/* Hook useFetch12; */}
      <h4>I am from useFetch12 </h4>
      <div>{JSON.stringify(data)}</div>
      <div>{data.title}</div>


      {/* Hook useFetchDyanamic */}
      <h4>I am from useFetchDynamic </h4>
      <button onClick={() => setPostNo(1)}>Post 1 !</button>
      <button onClick={() => setPostNo(2)}>Post 2 !</button>
      <button onClick={() => setPostNo(3)}>Post 3 !</button>

      <div>{JSON.stringify(post)}</div>


      {/* Hook useRefecth */}
      <h4>I m from useRefecth</h4>
      <div>{refechPost.title}</div>
      <div>Refeching in {timer} seconds</div>
    </>
  )
}

export default App
