import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Chats from './Pages/Chats.jsx'
import Buckets from './Pages/Buckets.jsx'
import Navbar from "./components/Navbar.jsx"
import Home from './Pages/Home.jsx'

function App() {

  return (

    <>
      <Router>

        <Navbar />

        <Routes>
          
          <Route path='/' exact element={<Home />}>
            <Route path='/' element={<Chats />} />
            <Route path='/buckets' element={<Buckets />} />
            <Route path='/others' element={<Buckets />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
