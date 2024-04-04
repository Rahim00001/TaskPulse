import Axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        console.log('hlw');
        e.preventDefault()
        Axios.post('http://localhost:5000/auth/forgot-password', { email })
            .then(response => {
                if (response.data.status) {
                    console.log('email sent');
                    alert("Cheak your email")
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-green-50'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Forgot Password?</h1>
                    <p className='text-sm text-gray-400'>Reset your password</p>
                </div>
                <form className='space-y-6 ng-untouched ng-pristine ng-valid' onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input type='email' name='email' id='email' required placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-300 bg-gray-200 text-gray-900'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <button type='submit' className='bg-green-300 hover:bg-green-400 w-full rounded-md py-3 mb-3 text-white font-medium'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;