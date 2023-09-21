import React, { useState } from 'react';
import Drawer from './Drawer';
import MenuDrawer from './MenuDrawer';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDrawerOpenMenu, setIsDrawerOpenMenu] = useState(false);

    const handleToggleDrawerMenu = () => {
        setIsDrawerOpenMenu(!isDrawerOpenMenu);
    };

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const [menu1Visible, setMenu1Visible] = useState(false);
    const [menu2Visible, setMenu2Visible] = useState(false);
    const [menu3Visible, setMenu3Visible] = useState(false);

    const toggleMenu1 = () => {
        setMenu1Visible(!menu1Visible);
    }
    const toggleMenu2 = () => {
        setMenu2Visible(!menu2Visible);
    }
    const toggleMenu3 = () => {
        setMenu3Visible(!menu3Visible);
    }


    return (
        <>
            <nav className="bg-[#0C0C0C]">
                <div className="max-w-screen-xl md:flex md:flex-wrap md:items-center md:justify-center md:mx-auto px-2 pt-[10px] pb-[11px]">
                    <div className="flex justify-between ">
                        <button
                            onClick={handleToggleDrawerMenu}
                            type="button"
                            className="pl-3 text-lg text-white rounded-lg md:hidden focus:outline-none flex"
                        >
                            <span className="">Menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" className='mt-[10px] mx-2'>
                                <path d="M1 1.5H13" stroke="white" strokeLinecap="round" />
                                <path d="M1 6.5H13" stroke="white" strokeLinecap="round" />
                                <path d="M1 11.5H13" stroke="white" strokeLinecap="round" />
                            </svg>
                        </button>

                        <button
                            onClick={handleToggleDrawer}
                            type="button"
                            className="text-lg text-white rounded-lg md:hidden focus:outline-none flex"
                        >
                            <span className="">Sidebar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mt-1 mx-2'>
                                <path d="M18 10H10" stroke="white" strokeLinecap="round" />
                                <path d="M18 6H6" stroke="white" strokeLinecap="round" />
                                <path d="M18 14H6" stroke="white" strokeLinecap="round" />
                                <path d="M18 18H10" stroke="white" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-[10px] gap-[80px] md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <a href="#" className="py-2 text-white hover:text-[#2D3FE4] md:p-0" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-2 text-white hover:text-[#2D3FE4] md:p-0" aria-current="page">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-2 text-white hover:text-[#2D3FE4] md:p-0" aria-current="page">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-2 text-white hover:text-[#2D3FE4] md:p-0" aria-current="page">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {isDrawerOpenMenu && (
                <>
                    <div className="fixed top-0 h-screen w-screen flex flex-row justify-start z-[2001]">
                        <div onClick={handleToggleDrawerMenu} className="flex-1 "></div>
                        <MenuDrawer isOpenMenu={isDrawerOpenMenu} onCloseMenu={handleToggleDrawerMenu}>
                            <div>
                                <ul className="font-medium flex flex-col items-center justify-center px-10 py-1 mt-4 ">
                                    <li className='py-5'>
                                        <a href="#" className="py-2 text-black hover:text-[#2D3FE4]" aria-current="page">
                                            Home
                                        </a>
                                    </li>
                                    <li className='py-5'>
                                        <a href="#" className="py-2 text-black hover:text-[#2D3FE4]" aria-current="page">
                                            About
                                        </a>
                                    </li>
                                    <li className='py-5'>
                                        <a href="#" className="py-2 text-black hover:text-[#2D3FE4]" aria-current="page">
                                            Blog
                                        </a>
                                    </li>
                                    <li className='py-5'>
                                        <a href="#" className="py-2 text-black hover:text-[#2D3FE4]" aria-current="page">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </MenuDrawer>
                    </div>
                </>
            )}
            {/* sidebar modal */}
            {isDrawerOpen && (
                <>
                    <div className="fixed top-0 h-screen w-screen flex flex-row justify-start z-[2001]">
                        <div onClick={handleToggleDrawer} className="flex-1 "></div>

                        <Drawer isOpen={isDrawerOpen} onClose={handleToggleDrawer}>
                            <div className='pt-1'>
                                <h2 className='text-black font-medium ml-[20px]'>Sidebar</h2>
                                {/* item1 */}
                                <div className="relative flex flex-col items-end gap-2 mt-4 ml-5 mr-2">
                                    <button onClick={toggleMenu1} className="relative block w-full h-[25px] bg-white text-gray-700 pr-5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <span className='absolute inset-y-0 left-0 flex items-center px-2 font-medium text-black'>Item 1</span>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                                <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </button>
                                    {menu1Visible && (
                                        <ul className="block relative">
                                            <li>
                                                <button className="px-8 bg-[#B8B6B6] w-full h-[25px] text-black font-medium">
                                                    Item A
                                                </button>
                                            </li>
                                            <li>
                                                <button className="mt-2 px-8 bg-[#B8B6B6] w-full h-[25px] text-black font-medium">
                                                    Item B
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                {/* item2 */}
                                <div className="relative flex flex-col items-end gap-2 mt-4 ml-5 mr-2">
                                    <button onClick={toggleMenu2} className="relative block w-full h-[25px] bg-white text-gray-700 pr-5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <span className='absolute inset-y-0 left-0 flex items-center px-2 font-medium text-black'>Item 2</span>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                                <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </button>
                                    {menu2Visible && (
                                        <ul className="block relative items-end">
                                            <li>
                                                <button className="px-8 bg-[#B8B6B6] w-full h-[25px] text-black font-medium">
                                                    Item A
                                                </button>
                                            </li>
                                            <li>
                                                <button className="mt-2 px-8 bg-[#B8B6B6] w-full h-[25px] text-black font-medium">
                                                    Item B
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                {/* item3 */}
                                <div className="relative flex flex-col items-end gap-2 mt-4 ml-5 mr-2">
                                    <button onClick={toggleMenu3} className="relative block w-full h-[25px] bg-white text-gray-700 pr-5 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <span className='absolute inset-y-0 left-0 flex items-center px-2 font-medium text-black'>Item 3</span>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                                <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </button>
                                    {menu3Visible && (
                                        <ul className="block relative">
                                            <li className=''>
                                                <button className="px-8 bg-[#B8B6B6] w-full h-[25px] text-black font-medium">
                                                    Item A
                                                </button>
                                            </li>
                                            <li>
                                                <button className="mt-2 px-8 bg-[#B8B6B6] w-full h-[25px] text-black font-medium">
                                                    Item B
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                {/* items end */}
                            </div>
                        </Drawer>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
