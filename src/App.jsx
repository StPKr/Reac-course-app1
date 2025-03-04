import React, { useState } from 'react'
import Search from './components/Search.jsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className='pattern'></div>
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>movies</span> you'll enjoy without the hassle!</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>
    </main>
  )
}

export default App