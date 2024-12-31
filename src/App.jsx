import { useState } from 'react'
import reactLogo from './assets/react.svg'
import githubLogo from './assets/github.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com" target="_blank">
          <img src={githubLogo} className="logo github" alt="GitHub logo" />
        </a>
      </div>
      <h1>Vite + React + GitHub Pages</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
