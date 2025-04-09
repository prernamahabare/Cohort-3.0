import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom, networkAtom, notificationAtom, messageAtom, totalNotificationSelector } from "./Atom"
import { useMemo } from 'react';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}

function Main() {
  const notification = useRecoilValue(notificationAtom);
  const message = useRecoilValue(messageAtom);
  const jobs = useRecoilValue(jobAtom);
  const network = useRecoilValue(networkAtom);

  // by using selector
  // const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  // By using memo
  const totalNotificationCount = useMemo(() => {
    return notification + message + jobs + network
  }, [notification, message, jobs, network])


  return (
    <>
      <button>Home</button>
      <button>Notification{notification}</button>
      <button>Messages{message}</button>
      <button>Jobs{jobs}</button>
      <button>Network{network}</button>
      <button>Me{totalNotificationCount}</button>
    </>
  )
}

export default App
