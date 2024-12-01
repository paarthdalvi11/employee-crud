import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Insert from './components/Insert/Insert';
import Update from './components/Update/Update';
import Delete from './components/Delete/Delete';
import Card from './components/Card/Card';
import Table from './components/Table/Table';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/card' element={<Card />} />
      <Route path='/table' element={<Table />} />
      <Route path='/insert' element={<Insert />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='/delete/:id' element={<Delete />} />
    </Routes>
  )
}

export default App
