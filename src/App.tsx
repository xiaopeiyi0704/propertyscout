import React from 'react'
import logo from './logo.svg'
import './App.css'
import HeaderMenu from './HeaderMenu'

function App() {
  return (
    <div className="App">
      <header>
        <p>Header</p>
      </header>
      <HeaderMenu />
      <p>Main Zone</p>
      <header>
        <p>Footer</p>
      </header>
    </div>
  )
}

export default App
