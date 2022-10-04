import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Intro from './components/Intro'
import Main from './components/Main'
import blobOne from './assets/blob-1.png'

function App() {
  return (
    <div className='bgContainerOuter bg-bgColor' style={{ backgroundImage: `url(${blobOne})` }} >
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/questions" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
