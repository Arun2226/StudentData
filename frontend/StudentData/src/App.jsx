import { useState } from 'react'
import './App.css'
import './index.css'
import Appbar from './components/Appbar'
import Student from './components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Appbar/>
    <Student/>
    </>
  )
}

export default App
