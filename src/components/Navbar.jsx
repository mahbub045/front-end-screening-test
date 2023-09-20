import React, { useState } from 'react';
import MenuModal from './MenuModal';
import SidebarModal from './SidebarModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
        setIsSidebarOpen(false); // Close the sidebar modal if it's open
    };

    const openSidebar = () => {
        setIsSidebarOpen(true);
        setIsMenuOpen(false); // Close the menu modal if it's open
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <nav className="bg-[#0C0C0C]">
                <div className="max-w-screen-xl md:flex md:flex-wrap md:items-center md:justify-center md:mx-auto px-2 pt-[10px] pb-[11px]">
                    <div className="flex justify-between ">
                        <button
                            onClick={openMenu}
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
                            onClick={openSidebar}
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
                                <a href="#" className="py-2 text-white md:p-0" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-2 text-white md:p-0" aria-current="page">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-2 text-white md:p-0" aria-current="page">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="py-2 text-white md:p-0" aria-current="page">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <MenuModal isOpen={isMenuOpen} onClose={closeMenu} />
            <SidebarModal isOpen={isSidebarOpen} onClose={closeSidebar} />
        </>
    );
};

export default Navbar;
