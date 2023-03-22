import { useEffect, useState } from 'react'

const Error = ({msg}) => {
    return (
        <div className='mb-3'>
            <p className='text-center text-red-600'>{msg}</p>
        </div>
    )
}

export default Error