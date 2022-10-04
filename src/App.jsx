import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './components/Intro'
import Main from './components/Main'

function App() {
  return (
    <div className='bgContainer2 bg-bgColor'>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/questions" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
