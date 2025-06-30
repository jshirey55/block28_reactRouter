import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
// import Navbar from './components/Navbar'
// import MainContainer from './components/MainContainer'

function App() {

  return (
     <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to='/blue'>BLUE!</Link>
        <Link to='/red'>RED!</Link>
        <Link to='/'>HOME!</Link>
      </div>
      <div id="main-section"><div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}



export default App
