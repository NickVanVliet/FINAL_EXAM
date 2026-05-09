import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'To Light Mode' : 'To Dark Mode'}
      </button>
    </div>
  )
}

export default App
