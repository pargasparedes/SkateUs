import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    const onLogout = () => {
        logout();
        navigate('/');
    }

    return (

        <div className=' navBg w-screen h-[80px] z-10 bg-transparent fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl logotxt font-bold mr-6 sm:text-4xl '>SkateUs</h1>
                    <ul className='flex'>
                        <li className='pl-4 font-extralight text-white text-2xl'><Link to="/">Home</Link></li>
                        {
                        user && <>
                        <li className='pl-4 font-extralight text-white text-2xl'><Link to="/learn" >Learn</Link></li>
                        <li className='pl-4 font-extralight text-white text-2xl'><Link to="/test" >Test</Link></li>
                        </>
                        }
                    </ul>
                </div>
                <div className='flex pr-4'>{
                    user ?
                        <>
                            <button className=' text-[#00477A] border-none text-xl bg-transparent mr-4' onClick={onLogout}>Logout</button>
                        </>
                    :
                        <>
                            <button className=' font-extralight border-none bg-transparent text-2xl text-white mr-4'>
                                <Link to="/login">Sign In</Link>
                                </button>
                            <button className='font-extralight px-8 py-3 text-xl'>
                                <Link to="/register">Register</Link>
                                </button>
                        </>
                }
                </div>
            </div>
        </div>
    )
};

export default Navbar;