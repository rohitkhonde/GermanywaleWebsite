import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // ✅ Fixed import
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
   <div className="App">
     <Router>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navbar/>} /> {/* ✅ Now this works */}
        </Routes>
      </Suspense>
    </Router>
   </div>
  )
}

export default App