import { useState } from 'react'
import Formulario from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({})

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          patients={patients}
          setPatients={setPatients}
          patient={patient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
        />
      </div>
    </div>
  )
}

export default App
