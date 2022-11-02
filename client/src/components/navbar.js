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
        // <Box sx={{flexGrow: 1}}>
        //     <AppBar position='static'>
        //         <Toolbar>
        //             <Typography variant='h5' component="div">
        //                 <Link to="/">ReactLogin</Link>
        //             </Typography>
        //             <Box alignItems="right" sx={{flexGrow: 1, textAlign: "right"}}>
        //                 { user ?
        //                     <>
        //                         <Button style={{textDecoration: "none", color: "white"}} onClick={onLogout}>Logout</Button>
        //                     </>
        //                 :
        //                     <>
        //                         <Link to="/login" style={{textDecoration: "none", color: "white", marginRight: "10px"}}>Login</Link>
        //                         <Link to="/register" style={{textDecoration: "none", color: "white"}}>Register</Link>
        //                     </>
        //                 }
        //             </Box>
        //         </Toolbar>
        //     </AppBar>
        // </Box>

        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl text-blue-400 font-bold mr-4 sm:text-4xl'>SkateUs</h1>
                    <ul className='hidden md:flex'>
                        <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="/learn" smooth={true} offset={-200} duration={500}>Learn</Link></li>
                        <li><Link to="/test" smooth={true} offset={-200} duration={500}>Test</Link></li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>{
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