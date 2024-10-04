import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Main from "./Pages/Home.jsx"
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Chats from './Pages/Chats.jsx'
import Buckets from './Pages/Buckets.jsx'

function App() {

  return (

    <>
      <Router>

        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/buckets' element={<Buckets />} />
          <Route path='/other' element={<Buckets />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
