import Contact from "./components/contact/Contact";
import './app.scss'
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Intro from './intro/Intro'
import { useState } from "react";
import Menu from './menu/Menu'

function App() {
  const[menuOpen,setMenuOpen]= useState(true)
  return (
    <div className="app" >
     <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
     <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
