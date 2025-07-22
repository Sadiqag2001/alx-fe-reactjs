import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
 

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact />} />

      </Routes>
     </Router>
    </>
  )
}

export default App
