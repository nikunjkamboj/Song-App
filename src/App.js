import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './common/Footer'
import Menu from './common/Menu'
import Home from './pages/Home'
import Read from './pages/Read'
import Create from './pages/Create'
import Update from './pages/Update'
import Search from './pages/Search'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/search" element={<Search/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>




    </>
  )
}

export default App