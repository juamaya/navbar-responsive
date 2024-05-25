import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Blog from './components/pages/Blog' 
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'


 const App = () => {
   return (
     <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
     </div>
   )
 }
 
 export default App
