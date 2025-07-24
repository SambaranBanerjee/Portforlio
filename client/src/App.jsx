import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
function App() { 
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            
            {/*
            <Route path='/experience' element={<Experience/>}/>
            
            
            */}
          </Routes>
        </div>
      </Router>
  )
}

export default App
