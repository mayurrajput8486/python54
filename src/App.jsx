import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About.jsx'
import Register from './Components/Pages/Register.jsx'
import Admin from './Components/Pages/Admin.jsx'
import Contact from './Components/Pages/Contact.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Studetails from './Components/Pages/Studetails.jsx'
function App() {
 
  return (
    <div>
        <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/admin' element={<Admin/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/studetails' element={<Studetails/>}/>
                  <Route path='*' element={<ErrorPage/>}/>
              </Routes>
        </BrowserRouter>
        <Footer/>
        
    </div>
  )
}

export default App
