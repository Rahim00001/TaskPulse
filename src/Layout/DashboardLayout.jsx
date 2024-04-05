import { useNavigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { useEffect } from 'react';
import Axios from 'axios'

const DashboardLayout = () => {
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get('http://localhost:5000/auth/verify')
            .then(res => {
                if (res.data.status) {
                    console.log('welcome to the dashboard');
                } else {
                    navigate('/')
                }
                console.log(res);
            })
    }, [navigate])
    return (
        <div className='relative min-h-screen md:flex'>
            {/* Sidebar Component */}
            <Sidebar></Sidebar>
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>
                    {/* Outlet for dynamic contents */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
};

export default DashboardLayout;