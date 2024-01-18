import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Addtocardpage from './pages/Addtocardpage'

const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coursespage' element={<Courses/>}/>
      <Route path='/addtocardpage' element={<Addtocardpage/>}/>
    </Routes>
    </Router>
  )
}

export default App