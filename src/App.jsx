import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Transparency from './components/Transparency/Transparency'

// ✅ Lazy load components
const Header = lazy(() => import('./components/Header/Header'))
const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Hero = lazy(() => import('./components/Hero/Hero'))
const TopUniversities = lazy(() => import('./components/TopUniversities/TopUniversities'))
const Testimonial = lazy(()=> import("./components/Testimonial/Testimonial"))
const Usp = lazy(()=> import('./components/Usp/Usp'))
const StudyInGermany = lazy(()=>import('./components/StudyInGermany/StudyInGermany'))
const SyncDocument = lazy(()=> import("./components/SyncDocument/SyncDocument"))
const Partners = lazy(() => import('./components/Partners/Partners'))
const Mentors = lazy(()=> import ('./components/Mentors/Mentors'))
// ✅ Create a proper loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
)

function App() {
  return (
    <div className="App">
      <Router>
        {/* ✅ Suspense should wrap the entire content that uses lazy components */}
        <Suspense fallback={<LoadingSpinner />}>
          {/* ✅ Header is outside Routes so it's always visible */}
          <Header />
          
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <TopUniversities/>
                <Testimonial/>
                <Usp/>
                <StudyInGermany/>
                <Transparency/>
                <SyncDocument/>
                <Partners/>
                <Mentors/>
                
              </>
            } />
            
           
            
           
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App