import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Light />
//     </>
//   )
// }

// export default App

// function Light() {
//   // Rolling up the state, unoptimal re-renders
//   // As your application grows, you might find that multiple components need access to the same state. Instead of duplicating state in each component, you can lift the state up to the LCA, allowing the common ancestor to manage it.


//   // Prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree.

//   //   - **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
//   // - **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.
//   const [isLighton, setLightOn] = useState(true);
//   return (
//     <>
//       <LightBulb isLighton={isLighton} />
//       <LightSwitch isLighton={isLighton} setLightOn={setLightOn} />
//     </>

//   )
// }

// function LightBulb(props) {
//   return (
//     <>
//       {props.isLighton ? "Bulb ON" : "Bulb OFF"}
//     </>
//   )
// }

// function LightSwitch({ isLighton, setLightOn }) {

//   function toggle() {
//     // method 1
//     setLightOn(!isLighton);

//     // method 2
//     // setLightOn(currentState => !currentState)
//   }
//   return (
//     <>
//       <button onClick={toggle}>Switch</button>
//     </>
//   )
// }



// Old Code
function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div>Hey I m Prerna </div>
      <Value count = {count}/>
      <Increase count = {count} setCount = {setCount}/>
      <Decrease count = {count} setCount = {setCount}/>
    </>

  )
}

export default App;

function Increase({count, setCount}){
  return(
    <>
    {/* way1 */}
    {/* <button onClick={() => setCount(count - 1)}>Decrese</button> */}

    {/* way2 */}
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Increse</button>
    </>
  )
}

function Decrease({count, setCount}){
  return(
    <>
    <button onClick={() => setCount(count - 1)}>Decrese</button>
    </>
  )
}

function Value({count}){
  return(
    <>
    <div>{count}</div>
    </>
  )
}


// Context API
// Above code with context API


