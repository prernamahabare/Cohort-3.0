import { useEffect, useRef, useState } from 'react';

// for UseRef

// useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.

// 1. **Persistent Across Renders**: The value stored in `useRef` persists between component re-renders. This means the value of a `ref` does not get reset when the component re-renders, unlike regular variables.
// 2. **No Re-Renders on Change**: Changing the value of a `ref` (`ref.current`) does **not** cause a component to re-render. This is different from state (`useState`), which triggers a re-render when updated.


// Clock with start and stop functionality

function App(){
  const [timer, setTimer] = useState(1);

  const intervalRef = useRef();
  // it will not rerender when we stop clock so it will again run from the same count

  function startTimer(){
    intervalRef.current = setInterval(function(){
      setTimer(timer => timer + 1)
    }, 1000)
  }

  function stopTimer(){
    clearInterval(intervalRef.current)
  }

  return(
    <>
    <div>
      {timer}
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
    </>
  )
}

// function App() {
//   const input1 = useRef();

//   function focus() {
//     input1.current.focus();
//   }

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <h2> signup</h2>
//         <input type="text" ref={input1} id="input1" />
//         <button onClick={focus}>Submit</button>
//       </div>

//     </>

//   )
// }




// for Router code

// import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
// function App() {
//   return (
//     <>
//       <div>Hii i m prerna</div>

//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Landing />}>
//             {/* <Route path='/' element={<Landing />}></Route> */}
//             <Route path='/demo' element={<Demo />}></Route>
//             <Route path='/support' element={<Support />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )

// }

// function Landing() {
//   return (
//     <>
//       <Link to="/">Home</Link>
//       <Link to="/demo">Demo</Link>
//       <Link to="/support">Support</Link>

//       <div>Hello i m landing page</div>
//       <Outlet style={{height: "90vh"}}/>
//       <footer>I m footer</footer>
//     </>
//   )
// }

// function Support() {
//   return (
//     <div>Support Page</div>
//   )
// }
// function Demo() {
//   return (
//     <div>Demo Page</div>
//   )
// }

export default App
