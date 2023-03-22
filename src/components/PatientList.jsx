import Patient from './Patient'
import { v4 as uuidv4 } from 'uuid';

const PatientList = ({ patients, setPatient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>
        {patients.length < 1 ? 'There are no patients' : 'Patients list'}
      </h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administrate your {''}
        <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
      </p>
      {patients.map((p, key) => (
        <Patient
          p={p}
          key={uuidv4()}
          setPatient={setPatient}
        />
      ))}
    </div>
  )
}

export default PatientList