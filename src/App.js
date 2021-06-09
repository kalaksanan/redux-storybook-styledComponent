import React from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'
import Header from './stories/Header'

function App() {
  const darkMode = true

  return (
    <div className='App'>
      <center>
        <Header darkMode={darkMode} />
      </center>
    </div>
  )
}

export default App
