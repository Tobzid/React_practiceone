import { useState } from 'react'
import './App.css'
import TheState from './components/first'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <div className='container'>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>

      <TheState/>
      </div>
   
    </>
  )
}

export default App
