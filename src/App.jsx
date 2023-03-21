import { useState } from 'react'
import Formulario from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario />
        <PatientList />
      </div>
    </div>
  )
}

export default App
