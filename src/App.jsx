import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import BotTester from "./Components/BotTester";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certifications";

function App() {
  return (
    <>
  
   <Router>
     <Navbar/>
     <BotTester/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
         <Route path="/skills" element={<Skills/>} />
         <Route path="/certificates" element={<Certifications/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
 
    </>
  )
}

export default App
