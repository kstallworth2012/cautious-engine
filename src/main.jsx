import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {BrowserRouter , Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
function App(){
	return(
      	<BrowserRouter>
		<nav>
		<Link to ="/">Home</Link>
		<Link to="/about">About</Link>
		</nav>
    	<Routes>
		<Route path="/" element={<Home />} />
		<Route path ="/about" element={<About />} />
    	</Routes>
  	</BrowserRouter>
	)
}


createRoot(document.getElementById('root')).render(
<App />
)
