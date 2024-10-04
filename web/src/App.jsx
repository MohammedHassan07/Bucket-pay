import Asside from "./components/Asside.jsx"
import Main from "./components/Pages/Main.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {

  return (

    <>

      <div className="flex">

        <Asside />

        <div className="w-full">

          <Navbar />
          <Main />
        </div>
      </div>

    </>
  )
}

export default App
