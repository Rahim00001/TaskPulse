import { useState } from 'react'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const { token } = useParams();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5000/auth/reset-password/' + token, { password })
            .then(response => {
                if (response.data.status) {
                    navigate('/login')
                }
                console.log(response.data.message);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-green-50'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Reset Password</h1>
                    <p className='text-sm text-gray-400'>Welcome to TaskPulse</p>
                </div>
                <form className='space-y-6 ng-untouched ng-pristine ng-valid' onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    New Password
                                </label>
                            </div>
                            <input type='password' name='password' autoComplete='new-password' id='password' required placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-300 bg-gray-200 text-gray-900'
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <button type='submit' className='bg-green-300 hover:bg-green-400 w-full rounded-md py-3 mb-3 text-white font-medium'>
                            Reset Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword