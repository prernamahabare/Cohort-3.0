import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
// import { jobAtom, networkAtom, notificationAtom, messageAtom, totalNotificationSelector } from "./Atom"
import { ItemAtom, ItemSelector } from './Atom';
import axios from 'axios';
import { useEffect, useMemo } from 'react';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}

function Main() {
  const [networkCount, setNetworkCount] = useRecoilState(ItemAtom)
  const SumOfItem = useRecoilValue(ItemSelector);
  
  // One way of Asynchronous data queries but not optimal
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos/1")
  //   .then(res => {
  //     setNetworkCount(res.data)
  //   })
  // }, [])
  // console.log(networkCount);

  


  return (
    <>

      <button>Home</button>
      <button>Notification{networkCount.userId}</button>
      <button>Messages{networkCount.id}</button>
      <button>Jobs{networkCount.title}</button>
      <button>Network{networkCount.completed}</button> 
       <button>Me{SumOfItem}</button>
    </>
  )
}
// Combine Atom Call
// function App() {
//   return (
//     <RecoilRoot>
//       <Main />
//     </RecoilRoot>
//   )
// }

// function Main() {
//   const allItem = useRecoilValue(ItemAtom);

//   const notification = allItem.notification;
//   const message = allItem.message;
//   const jobs = allItem.job;
//   const network = allItem.network;

//   const SumOfItem = useRecoilValue(ItemSelector);


//   return (
//     <>
//       <button>Home</button>
//       <button>Notification{notification}</button>
//       <button>Messages{message}</button>
//       <button>Jobs{jobs}</button>
//       <button>Network{network}</button>
//       <button>Me{SumOfItem}</button>
//     </>
//   )
// }

// Simple way By atom and Selector

// function Main() {
//   const notification = useRecoilValue(notificationAtom);
//   const message = useRecoilValue(messageAtom);
//   const jobs = useRecoilValue(jobAtom);
//   const network = useRecoilValue(networkAtom);

//   // by using selector
//   // const totalNotificationCount = useRecoilValue(totalNotificationSelector)

//   // By using memo
//   const totalNotificationCount = useMemo(() => {
//     return notification + message + jobs + network
//   }, [notification, message, jobs, network])


//   return (
//     <>
//       <button>Home</button>
//       <button>Notification{notification}</button>
//       <button>Messages{message}</button>
//       <button>Jobs{jobs}</button>
//       <button>Network{network}</button>
//       <button>Me{totalNotificationCount}</button>
//     </>
//   )
// }

export default App
