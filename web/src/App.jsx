import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div className='bg-gray-800 h-screen w-screen '>

        <h1 className="text-3xl font-bold underline text-white">
          Hello world!
        </h1 >
      </div>
    </>
  )
}

export default App
