import { Link } from 'react-router-dom'
import MenuDropdown from './MenuDropdown'
import logo from "../../../assets/Images/taskpulse.png"

const Navbar = () => {
    return (
        <div className='fixed w-full bg-green-50 shadow-sm z-10 max-w-[2520px] mx-auto xl:px-20 sm:px-2 px-4'>
            <div className='flex flex-row py-2 items-center justify-between gap-3 md:gap-0'>
                {/* Logo */}
                <Link to='/'>
                    <img className='hidden md:block' src={logo} alt='logo' width='100' height='10'
                    />
                </Link>
                {/* Dropdown Menu */}
                <MenuDropdown />
            </div>
        </div>
    )
}

export default Navbar