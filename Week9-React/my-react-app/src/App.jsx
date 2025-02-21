import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  function increseCount() {
    setCount(count + 1);
  }

  useEffect(function () {
    setInterval(function () {
      setCount(count => count + 1);
    }, 1000)
  }, []);

  return (
    <>
    <h1>{count}</h1>
      {/* <button onClick={increseCount}>count{count}</button> */}

      Hello i m prerna
      hello guys
    </>
  )
}

export default App
