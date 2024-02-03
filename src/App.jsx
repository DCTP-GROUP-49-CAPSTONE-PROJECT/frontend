import { useState } from 'react'
import './App.css'
import { landing } from './assets'
import { DemoPage } from './pages/DemoPage'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
      <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </>
  )
}

export default App
