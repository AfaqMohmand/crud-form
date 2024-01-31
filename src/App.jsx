import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CompleteCv from './components/CompleteCv'
import DashboardTable from './components/DashboardTable'

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/cv' element={<CompleteCv />} />
      <Route path='/cv/:id' element={<CompleteCv />} />
      <Route path='/dashboardTable' element={<DashboardTable />} />
     </Routes>
    </div>
  )
}

export default App
