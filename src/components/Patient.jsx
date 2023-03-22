const Patient = ({ p, setPatient }) => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Name: {''}
                <span className='font-normal normal-case'>{p.name}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Owner: {''}
                <span className='font-normal normal-case'>{p.owner}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{p.email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Date: {''}
                <span className='font-normal normal-case'>{p.admission}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Symptoms: {''}
                <span className='font-normal normal-case'>{p.symptoms}</span>
            </p>

            <div className='flex justify-around mt-5'>
                <button
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={() => setPatient(p)}
                >
                    Edit
                </button>
                <button
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
                    Delete</button>
            </div>
        </div>
    )
}

export default Patient