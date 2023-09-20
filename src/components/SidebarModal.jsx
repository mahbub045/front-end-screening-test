import React from 'react';
import Modal from 'react-modal';

const SidebarModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className='bg-[#9398BF] border border-red-500 min-h-screen z-50 w-1/2 relative '>
                <button onClick={onClose} className="text-white py-6 px-4 mr-2 flex m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.6569 17.6569L6.34319 6.34315" stroke="white" strokeLinecap="round" />
                        <path d="M17.6568 6.34315L6.34311 17.6569" stroke="white" strokeLinecap="round" />
                    </svg>
                </button>
                <div className='pt-4'>
                    <h2 className='text-black font-medium ml-[20px]'>Sidebar</h2>
                    <div className="relative flex flex-col items-end gap-4 mt-4 mr-2">
                        <select className="block appearance-none w-[185px] h-[25px] bg-white text-gray-700 pr-5 px-2  leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Item 1</option>
                            <option>Item A</option>
                            <option>Item B</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-end gap-4 mt-4 mr-2">
                        <select className="block appearance-none w-[185px] h-[25px] bg-white text-gray-700 px-2 pr-5  leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Item 2</option>
                            <option>Item A</option>
                            <option>Item B</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-end gap-4 mt-4 mr-2">
                        <select className="block appearance-none w-[185px] h-[25px] bg-white text-gray-700 px-2 pr-5  leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Item 3</option>
                            <option>Item A</option>
                            <option>Item B</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                <path d="M1 0.5L7 6.5L13 0.5" stroke="black" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SidebarModal;
