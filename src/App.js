import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddNewMenu from './components/AddNewMenu'
import EditMenu from './components/EditMenu'
import Menus from './components/Menus'

function App() {
  return (
    <Routes>
      <Route path='/edit/:id' element={<EditMenu />} />
      <Route path='/add' element={<AddNewMenu />} />
      <Route path='/' element={<Menus />} />
    </Routes>
  )
}

export default App
