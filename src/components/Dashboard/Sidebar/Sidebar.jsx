import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'
// Components
import MenuItem from './MenuItem'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from "../../../assets/Images/taskpulse.png"


const Sidebar = () => {
    const [isActive, setActive] = useState(true)
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    // logout handler
    const handleLogout = () => {
        Axios.get('http://localhost:5000/auth/logout')
            .then(res => {
                if (res.data.status) {
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        {/* <Logo /> */}
                        <Link to='/'>
                            <img src={logo} alt='logo' width='100' height='10'
                            />
                        </Link>
                    </div>
                </div>
                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-200 mx-auto'>
                            {/* <Logo /> */}
                            <Link to='/'>
                                <img className='hidden md:block' src={logo} alt='logo' width='100' height='10'
                                />
                            </Link>
                        </div>
                    </div>
                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {/* Menu Items */}
                            <MenuItem
                                icon={BsGraphUp}
                                label='Ongoing'
                                address='/dashboard'
                            />
                        </nav>
                    </div>
                </div>
                {/* bottom Menu Items */}
                <div>
                    <hr />
                    <MenuItem
                        icon={FcSettings}
                        label='Profile'
                        address='/dashboard/profile'
                    />
                    <button onClick={handleLogout} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar