import React from 'react'
import Patient from './Patient'


const PatientList = props => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-xl text-center'>Listado de pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administrate your {''}
        <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
      </p>
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  )
}

PatientList.propTypes = {}

export default PatientList