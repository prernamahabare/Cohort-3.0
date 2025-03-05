import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <div>Hii i m prerna</div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}>
            {/* <Route path='/' element={<Landing />}></Route> */}
            <Route path='/demo' element={<Demo />}></Route>
            <Route path='/support' element={<Support />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

function Landing() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/demo">Demo</Link>
      <Link to="/support">Support</Link>

      <div>Hello i m landing page</div>
      <Outlet style={{height: "90vh"}}/>
      <footer>I m footer</footer>
    </>
  )
}

function Support() {
  return (
    <div>Support Page</div>
  )
}
function Demo() {
  return (
    <div>Demo Page</div>
  )
}

export default App
