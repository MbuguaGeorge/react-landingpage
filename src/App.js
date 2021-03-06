import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/blog';
import './App.css'

function App(){
  return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
  )
}

export default App;