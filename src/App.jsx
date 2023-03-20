import { useState } from 'react'
import './App.css'
import Formulario from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <h1>Appointment Manager</h1>
      <Formulario />
      <PatientList />
    </div>
  )
}

export default App
