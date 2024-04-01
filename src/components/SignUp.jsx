import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-green-50'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to TaskPulse</p>
                </div>
                <form className='space-y-6 ng-untouched ng-pristine ng-valid'>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input type='text' name='name' id='name' placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-300 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input type='email' name='email' id='email' required placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-300 bg-gray-200 text-gray-900'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input type='password' name='password' autoComplete='new-password' id='password' required placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-300 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button type='submit' className='bg-green-300 hover:bg-green-400 w-full rounded-md py-3 mb-3 text-white font-medium'>
                            Continue
                        </button>
                    </div>
                </form>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link to='/login' className='hover:underline hover:text-green-400 text-gray-600'>
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignUp