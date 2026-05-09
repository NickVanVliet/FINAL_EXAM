import { useState, useEffect } from 'react'
import './App.css'

import CatAdoptList from './CatAdoptList.tsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const [cats, setCats] = useState( () => { /* load cats from local storage when page loads */
    const savedCats = localStorage.getItem('cats')
    return savedCats ? JSON.parse(savedCats) : []
  })

  const [newCat, setNewCat] = useState('')

/*save cats to local storage */
  useEffect( () => { 
    localStorage.setItem('cats', JSON.stringify(cats))
  }, [cats])

 /* add new cat to the list */
    function addCat() {
    if (newCat.trim() === '') return

    setCats([...cats, newCat])
    setNewCat('')
  }

/*I had comments in the return statement but they were popping up on the page, so I got rid of them lol. */
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>

      <div className= "button-DarkMode"> 
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'To Light Mode' : 'To Dark Mode'}
        </button>
      </div>

      <h1> Cat Adoption List</h1> 
      <CatAdoptList cats={cats} newCat={newCat} setNewCat={setNewCat} addCat={addCat} />
    </div>
  )
}
export default App
