import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useNavigate } from 'react-router-dom'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/');
    }

    return (

        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl text-blue-600 font-bold mr-6 sm:text-4xl '>SkateUs</h1>
                    <ul className='flex'>
                        <li className='pl-4'><Link to="/">Home</Link></li>
                        <li className='pl-4'><Link to="/learn" >Learn</Link></li>
                        <li className='pl-4'><Link to="/test" >Test</Link></li>
                    </ul>
                </div>
                <div className='flex pr-4'>{
                    user ?
                        <>
                            <button className='border-none bg-transparent text-black mr-4' onClick={onLogout}>Logout</button>
                        </>
                    :
                        <>
                            <button className='border-none bg-transparent text-black mr-4'>
                                <Link to="/login">Sign In</Link>
                                </button>
                            <button className='px-8 py-3'>
                                <Link to="/register">Register</Link>
                                </button>
                        </>
                }
                </div>
                {/* <div className='md:hidden'>
                    <MenuIcon/>
                </div> */}
            </div>
        </div>
    )
};

export default Navbar;