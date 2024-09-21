import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {BrowserRouter , Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import JetsHome from "./pages/JetsHome"												
function App(){
	return(
      	<BrowserRouter>
	<header>
		<Link to="/">#JETSETLIFE</Link> 
		<nav>
		<Link to ="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/jets">Jets Home</Link>
		</nav>
	</header>
    	<Routes>
		<Route path="/" element={<Home />} />
		<Route path ="/about" element={<About />} />
		<Route path ="/jets" element={<JetsHome />} />
    	</Routes>
  	</BrowserRouter>
	)
}


createRoot(document.getElementById('root')).render(
<App />
)
