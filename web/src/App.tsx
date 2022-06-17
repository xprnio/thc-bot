import { useState } from 'react'
import './App.css'
import MainView from './views/MainView/MainView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainView />
    </div>
  )
}

export default App
