import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  // function increseCount() {
  //   setCount(count + 1);
  // }

  useEffect(() =>{
    let counter = setInterval(()=>{
      setCount(count => count + 1)
    }, 1000)

    // If we dont unmount or cleanup setInterval then it switch like 1,3,5,6 bez for 1000 sec it running in background show it skips 1 no bez time is 1 sec. 

    // If we use this then it will stop the counter to update when componet is unmounted(means in waiting period clock does not update).
    return function(){
      clearInterval(counter);
    }
  }, [])// Empty dependency array means this runs once when the component mounts(means starting at the application).


  // useEffect(()=>{
  //   setInterval(()=>{
  //     console.log("hello from useeffect");
  //   })
  // },[count])

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
