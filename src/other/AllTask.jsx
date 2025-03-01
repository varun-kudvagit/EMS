import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    const [userData] = useContext(AuthContext)

    return (
        <div className='bg-[black] rounded-xl shadow-md shadow-black/10 p-6 mt-6'>
            <h2 className='text-xl font-bold text-gray-100 mb-6'>Task Overview</h2>
            <div className='bg-black mb-4 py-3 px-6 flex justify-between rounded-lg'>
                <h2 className='w-1/5 font-semibold text-gray-300'>Emp Name</h2>
                <h3 className='w-1/5 font-semibold text-center text-gray-300'>New Task</h3>
                <h5 className='w-1/5 font-semibold text-center text-gray-300'>Active Task</h5>
                <h5 className='w-1/5 font-semibold text-center text-gray-300'>Completed</h5>
                <h5 className='w-1/5 font-semibold text-center text-gray-300'> Failed</h5>
            </div>
            <div className='overflow-auto max-h-[300px]'>
                {userData.map((element) => (
                    <div
                        key={element.id}
                        className='bg-[#5e5e5d] border border-gray-600 hover:bg-[#404040] mb-2 py-3 px-6 flex justify-between rounded-lg transition-all duration-200'>
                        <h2 className='w-1/5  text-gray-100'>{element.firstName}</h2>
                        <h3 className='w-1/5 text-center text-gray-300'>{element.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-center text-gray-300'>{element.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-center text-gray-300'>{element.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-center text-gray-300'>{element.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask
