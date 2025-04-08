import { createContext, useContext, useState, memo, useEffect } from 'react';
import { CounterAtom, isEvenSelector } from './store/atom/CounterAtom';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";


// Context API
// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return <CountContext.Provider value={{ count, setCount }}>
//     {children}
//   </CountContext.Provider>
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Increase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   )
// }

// function App() {
//   return (
//     <>
//       <Parent />
//     </>
//   )
// }
// export default App

// function Increase() {
//   const { count, setCount } = useContext(CountContext);

//   return (
//     <button onClick={() => setCount(count + 1)}>Increase</button>
//   )
// }

// function Decrease() {
//   const { count, setCount } = useContext(CountContext);

//   return (<button onClick={() => setCount(count - 1)}>Decrease</button>)
// }

// function Value() {
//   const { count, setCount } = useContext(CountContext);

//   return (<div>{count}</div>)
// }


// function App() {
//   return (
//     <>
//       <RecoilRoot>
//         <Parent />
//       </RecoilRoot>
//     </>
//   )
// }

// function Parent() {

//   return (
//     <>
//       < Value />
//       <Increase />
//       <Decrease />
//     </>
//   )

// }

// function Value() {
//   const count = useRecoilValue(Counter);
//   return (
//     <div>{count}</div>
//   )
// }

// function Increase() {
//   const setCount = useSetRecoilState(Counter);
//   return (
//     <div>
//       <button onClick={() => { setCount(c => c + 1) }}>Increase</button>
//     </div>
//   )
// }

// function Decrease() {
//   const setCount = useSetRecoilState(Counter);
//   return (
//     <div>
//       <button onClick={() => { setCount(c => c - 1) }}>Decrease</button>
//     </div>
//   )
// }

// export default App

// memo lets you skip re-rendering a component when its props are unchanged.
// function App() {

//   return (
//     <>
//       <RecoilRoot>
//         <Parent />
//       </RecoilRoot>
//     </>)

// }

// function Parent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount(c => c + 1);
//     }, 3000);

//   }, [])

//   return (
//     <>

//       <div>
//         <Value />
//         <Increase />
//         <Decrease />
//       </div>

//     </>)
// }

// const Value = memo(function () {
//   return (
//     <>
//       <div style={{ margin: "auto", border: "3px solid Black" }}>1</div></>
//   )
// })

// const Increase = memo(function () {
//   return (
//     <>
//       <button style={{ padding: "5px", margin: "20px" }}>Increase</button>
//     </>
//   )
// })

// const Decrease = memo(function () {
//   // const setCount = useSetRecoilState(Counter);
//   return (
//     <>
//       <button style={{ padding: "5px", margin: "20px" }}>Decrease</button>
//     </>
//   )
// })

// export default App



function App() {
  return (
    <RecoilRoot>
      <Button />
      <Counter />
      <IsEven />
    </RecoilRoot>
  )

}

function Button() {
  const setCount = useSetRecoilState(CounterAtom);
  return (
    <div>
      <button onClick={() => setCount(c => c + 2)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(CounterAtom);
  return (
    <div>
      {count}
    </div>
  )
}
// Use of selector
function IsEven() {
  const even = useRecoilValue(isEvenSelector);
  return (
    <div>
      {even ? "Even" : "Odd"}
    </div>
  )
}

export default App;