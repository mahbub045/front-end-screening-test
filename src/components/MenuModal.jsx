import React from 'react';
import Modal from 'react-modal';

const MenuModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <div className='bg-[#ADADAD] border border-red-500 min-h-screen z-50 w-1/2 relative right-0'>
                <button onClick={onClose} className="text-white py-6 px-4 mr-2 flex m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M17.6569 17.6569L6.34319 6.34315" stroke="white" strokeLinecap="round" />
                        <path d="M17.6568 6.34315L6.34311 17.6569" stroke="white" strokeLinecap="round" />
                    </svg>

                </button>
                <div>
                    <ul className="font-medium flex flex-col items-center justify-center px-10 py-5 mt-4 ">
                        <li className='py-5'>
                            <a href="#" className="py-2 text-white" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="#" className="py-2 text-white" aria-current="page">
                                About
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="#" className="py-2 text-white" aria-current="page">
                                Blog
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="#" className="py-2 text-white" aria-current="page">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </Modal>
    );
};

export default MenuModal;
