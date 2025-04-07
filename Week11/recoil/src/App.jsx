import { createContext, useContext, useState, memo } from 'react';
import { Counter } from './store/atom/CounterAtom';
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


function App() {
  return (
    <>
    </>)

}

const Increase = memo(function () {
  return (
    <>
      <button>Increase</button>
    </>
  )
})

function Increase() {
  return (
    <>
      <button>Increase</button>
    </>
  )
}

export default App