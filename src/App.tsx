import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ThankYou from './pages/ThankYou'
import './App.css'

function App() {
  return (
      <div className='app'>
          <Routes>
              <Route path={'/'} element={<Home/>} />
              <Route path={'/about'} element={<About/>} />
              <Route path={'/services'} element={<Services/>} />
              <Route path={'/thank_you'} element={<ThankYou/>} />
          </Routes>
      </div>
  )
}

export default App
