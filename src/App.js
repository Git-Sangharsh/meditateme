import React from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Course from './component/course/Course'
const App = () => {
  return (
    <div>
      <Navbar />
      <Course />
      <Course />
    </div>
  )
}

export default App