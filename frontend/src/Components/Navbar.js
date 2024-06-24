import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
    const [active, setactive] = useState('Home')
    const [nav, setnav] = useState(false)
    const [isDark, setisDark] = useState(false)

    function handletheme() {
        setisDark(!isDark)
    }
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDark]);
    return (
        <div className='flex justify-between items-center border-b-2 p-3 text-sm'>
            <div className='ml-4  order-1 md:order-1'>
                <span className='border p-2 rounded-md border-2-purple-500 bg-purple-700 text-white font-semibold '>Hamza's</span>
                Blog
            </div>
            {/* ////////////////////// */}
            <div className='order-2 '>
                <div className='border-2 flex p-2 rounded-md active:border-gray-200 hover:border-gray-200'>
                    <input type="text" placeholder='Search..' className='border-none outline-none hidden md:flex bg-transparent' />
                    <SearchIcon></SearchIcon>
                </div>

            </div>
            {/*  */}

            <div className=' order-4 md:order-3 flex relative'>
                <div className='md:hidden' onClick={() => setnav(!nav)}>
                    <div className='w-[30px] rounded-md h-[3px] bg-black m-1'></div>
                    <div className='w-[30px] rounded-md h-[3px] bg-black m-1'></div>
                    <div className='w-[30px] rounded-md h-[3px] bg-black m-1'></div>

                </div>
                <ul className={`md:space-x-8  space-x-0 md:flex ${nav ? 'opened  ' : 'hidden'}  `}>
                    <Link to={'/'} className={`cursor-pointer ${active === 'Home' && 'text-green-600 font-bold'}`} onClick={() => { setactive('Home'); setnav(false) }}>Home</Link>
                    <Link to={'/about'} className={`cursor-pointer ${active === 'About' && 'text-green-600 font-bold'}`} onClick={() => { setactive('About'); setnav(false) }}>About</Link>
                    <Link to={'/projects'} className={`cursor-pointer ${active === 'Projects' && 'text-green-600 font-bold'}`} onClick={() => { setactive('Projects'); setnav(false) }}>Projects</Link>
                </ul>
            </div>
            {/*  */}
            <div className='mr-4 space-x-4 flex items-center md:order-4 order-3'>
                <div className='p-1 border rounded-full' onClick={handletheme}>
                    {
                        isDark ?
                            <LightModeIcon ></LightModeIcon>
                            :
                            <Brightness2Icon  ></Brightness2Icon>
                    }
                </div>

                <button className='border-purple-600 p-2 border rounded-md hover:bg-purple-500 hover:text-white hover font-semibold px-4'>Sign in</button>
            </div>
            {/*  */}
        </div>
    )
}

export default Navbar
