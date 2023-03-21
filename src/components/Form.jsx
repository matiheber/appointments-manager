import { useState } from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h1 className='font-black text-3xl text-center'>Patients</h1>
      <p className='text-lg text-center mb-10'>
        Add and <span className='text-indigo-600 font-bold'>admin</span> patients
      </p>

      <form className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor='name' className='block text-gray-700 uppercase font-bold'>Pets name</label>
          <input
            type='text'
            placeholder='Doby'
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            id='name'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='ownerName' className='block text-gray-700 uppercase font-bold'>Owners name</label>
          <input
            type='text'
            placeholder='Harry'
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            id='ownerName'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input
            type='email'
            placeholder='harrypotter@hogwarts.com'
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            id='email'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='discharge' className='block text-gray-700 uppercase font-bold'>Discharge date</label>
          <input
            type='date'
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            id='discharge'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='symptoms' className='block text-gray-700 uppercase font-bold'>Symptoms</label>
          <textarea
            id='symptoms'
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md'
            placeholder='Describe pet symptoms'
          />
        </div>
        <input 
        type='submit'
        className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
        value='Add patient'
        />
      </form>
    </div>

  )
}

export default Form;