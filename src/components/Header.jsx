import React from 'react'

const Header = props => {
  return (
    <>
        <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>
            Patients follow up {''}
            <span className='text-indigo-600 '>Veterinary</span>
        </h1>
    </>
  )
}

Header.propTypes = {}

export default Header