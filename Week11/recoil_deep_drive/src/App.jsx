import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom, networkAtom, notificationAtom, messageAtom } from "./Atom"

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

  return (
    <>
      <button>Home</button>
      <button>Notification{notification}</button>
      <button>Messages{message}</button>
      <button>Jobs{jobs}</button>
      <button>Network{network}</button>
      <button>Me</button>
    </>
  )
}

export default App
