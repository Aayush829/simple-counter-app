import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }
  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
     <h1>Simple-Counter-Project</h1>
     <h2>Counter value : {count}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
