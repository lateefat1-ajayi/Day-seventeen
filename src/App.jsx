import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ListPage from './pages/ListPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
