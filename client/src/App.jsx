import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
function App() { 

  return (
    <>
      <Router>
        <div className="App">
          <Navbar/>
          <About/>
        </div>
      </Router>
    </>
  )
}

export default App
