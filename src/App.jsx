import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/Home'
import Upload from '../src/pages/Upload'
import PreviewPage from './pages/PreviewPage'
import Model from './pages/Models'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path='/model' element={<Model />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
