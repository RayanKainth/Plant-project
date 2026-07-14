import { Route, Routes } from 'react-router-dom'
import Home from './componets/view/home/home'
import Layout from './componets/view/layout/layout'

function App() {


  return (
    <>
    <Layout>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      </Routes>
      </Layout>
    </>
  )
}

export default App
