const Patient = () => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Name: {''}
                <span className='font-normal normal-case'>Doby</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Owner: {''}
                <span className='font-normal normal-case'>Harry</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>harrypotter@hogwarts.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Date: {''}
                <span className='font-normal normal-case'>December 10 2023</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Symptoms: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolor facere vero illum ut beatae dolore quam, hic dignissimos at excepturi mollitia non ea, quod dolorem fuga atque voluptate odio!</span>
            </p>
        </div>
    )
}

export default Patient