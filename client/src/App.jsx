import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Insert from './components/Insert/Insert';
import Update from './components/Update/Update';
import Delete from './components/Delete/Delete';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/insert' element={<Insert />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='/delete/:id' element={<Delete />} />
    </Routes>
  )
}

export default App
